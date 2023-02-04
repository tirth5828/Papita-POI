const http = require("https"); // or 'https' for https:// URLs
const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, "uploads", "file.jpg");
async function depp() {
  const file = fs.createWriteStream(dirPath);
  const request = http.get(
    "https://app.zeeve.io/zdfs-gateway/ipfs/QmYJXB5kTkjze5cKtzCzGZzudtNAuRakD9F7aZdcTUS9Dp",
    function (response) {
      response.pipe(file);

      // after download completed close filestream
      file.on("finish", () => {
        file.close();
        console.log("Download Completed");
      });
    }
  );
}
depp();
