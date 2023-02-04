const express = require("express");
const app = express();
const axios = require("axios");
const lighthouse = require("@lighthouse-web3/sdk");
require("dotenv").config();
// const { Blob } = require("buffer");
const { ethers } = require("ethers");
const fs = require("fs");
const bodyparser = require("body-parser");
const cors = require("cors");
// const upload = require("./upload");
const http = require("https");
// const crypto = require('crypto');
// const fileUpload = require("express-fileupload");
// const ABI = require('./abi');
app.use(cors());
// app.use(fileUpload());
app.use(express.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(express.static("files"));
app.use(bodyparser.json());

// const { DataV1Api } = require("zeeve-zdfs-sdk");
const path = require("path");

// instead of one write the folder name
const dirPath = path.join(__dirname, "uploads");
const dirPath2 = path.join(__dirname, "downloads");

// const arr = ['hello', 'world', 'hritik']
// console.log(arr)

// var multer = require('multer');
// var upload = multer({dest:'uploads/'});

// function decryptText (encryptedText) {
//   return crypto.privateDecrypt(
//     {
//       key: fs.readFileSync('private_key.pem', 'utf8'),
//       // In order to decrypt the data, we need to specify the
//       // same hashing function and padding scheme that we used to
//       // encrypt the data in the previous step
//       padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
//       oaepHash: 'sha256'
//     },
//     encryptedText
//   )
// }
// function encryptText (plainText) {
//   return crypto.publicEncrypt({
//     key: fs.readFileSync('public_key.pem', 'utf8'),
//     padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
//     oaepHash: 'sha256'
//   },
//   Buffer.from(plainText)
//   )
// }
app.post("/d", async (req, res) => {
  console.log(req.body);
});

const sign_auth_message = async (publicKey, privateKey) => {
  let httpProvider = new ethers.providers.JsonRpcProvider();
  const signer = new ethers.Wallet(privateKey, httpProvider);
  const messageRequested = (await lighthouse.getAuthMessage(publicKey)).data
    .message;
  const signedMessage = await signer.signMessage(messageRequested);
  return signedMessage;
};

app.post("/deploy", async (req, res) => {
  try {
    const arr = req.body.urls;
    console.log(typeof arr)
    console.log("Here");
    for (let i = 0; i < arr.length; i++) {
      const data = arr[i];
      await fs.writeFile(
        dirPath + "/Output.txt",
        data + "\n",
        { flag: "a+" },
        (err) => {
          if (err) throw err;
        }
      );
    }
    const path = "uploads/Output.txt";
    const apiKey = process.env.API_KEY;
    const publicKey = "0xd1A27e54b3996DcDbB0A8B7412DE4c0326B6E9EF";
    const privateKey = process.env.PRIVATE_KEY;
    const signed_message = await sign_auth_message(publicKey, privateKey);

    const response = await lighthouse.uploadEncrypted(
      path,
      apiKey,
      publicKey,
      signed_message
    );
    // Display response
    console.log(response);
  } catch (e) {
    console.log(e);
  }
});
app.post("/incident", async (req, res) => {
  // const cid = req.body.cid;
  const cid = "QmZRNiX95qtoKxubDpL9twDJTXgVmCSmZzb4qvBtLyysGm";
  const publicKey = "0xd1A27e54b3996DcDbB0A8B7412DE4c0326B6E9EF";
  const privateKey = process.env.PRIVATE_KEY;

  // Get file encryption key
  try {
    const signed_message = await sign_auth_message(publicKey, privateKey);
    console.log("Hello");
    const fileEncryptionKey = await lighthouse.fetchEncryptionKey(
      cid,
      publicKey,
      signed_message
    );

    // Decrypt File
    console.log(fileEncryptionKey);
    console.log("Hello");
    // Decrypt File
    const decrypted = await lighthouse.decryptFile(
      cid,
      fileEncryptionKey.data.key
    );

    console.log("Hello");
    console.log(decrypted);
    // Save File
    const file = fs
      .createWriteStream(dirPath2 + "/Output.txt")
      .write(Buffer.from(decrypted));
    var textByLine = [];
    fs.readFile(dirPath + "/Output.txt", (err, inputD) => {
      if (err) throw err;
      const data = inputD.toString();
      textByLine = data.split("\n");
      console.log(textByLine);
    });
    // console.log();
    // const buf = Buffer.from(decrypted);
    // const data = buf.toString('base64');
    // console.log(buf);
    res.status(201).json(textByLine);
  } catch (e) {
    console.log(e);
  }
});
// app.post("/deploy", async (req, res) => {
//   // console.log(req.body);
//   const arr = req.body.urls;
//   // for(i = 0; i < arr.length; i++){
//   //   arr[i] = encryptText(arr[i]).toString('base64');
//   // }
//   console.log("Here");
//   for (let i = 0; i < arr.length; i++) {
//     const data = arr[i];
//     fs.writeFile(
//       dirPath + "/Output.txt",
//       data + "\n",
//       { flag: "a+" },
//       (err) => {
//         if (err) throw err;
//       }
//     );
//   }
//   try {
//     const dataApi = new DataV1Api(
//       "https://app.zeeve.io/zdfs-api",
//       process.env.ACCESS_TOKEN
//     );
//     const res = await dataApi.uploadFile("uploads/Output.txt", Date.now());
//     console.log(res);
//     res.status(201).json({success: true});
//   } catch (error) {
//     console.log(error);
//     res.status(404).json({error})
//   }
// });
// app.post("/incident", async (req, res) => {
//   const file = fs.createWriteStream(dirPath);
//   const request = http.get(
//     "https://app.zeeve.io/zdfs-gateway/ipfs/QmYJXB5kTkjze5cKtzCzGZzudtNAuRakD9F7aZdcTUS9Dp",
//     function (response) {
//       response.pipe(file);

//       // after download completed close filestream
//       file.on("finish", () => {
//         file.close();
//         console.log("Download Completed");
//       });
//     }
//   );
//   var textByLine = [];
//   fs.readFile(dirPath + "/Output.txt", (err, inputD) => {
//     if (err) throw err;
//     const data = inputD.toString();
//     textByLine = data.split("\n");
//     console.log(textByLine);
//   });

// for(i = 0; i < textByLine.length; i++){
//   textByLine[i] = decryptText(Buffer.from(arr[i])).toString('base64');
// }

//textByLine has all the file data in each index.
// });

app.listen(5000, () => {
  console.log("Backend is running.");
});
