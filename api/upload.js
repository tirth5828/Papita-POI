const path = require("path");
const multer = require("multer");

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, 'uploads')
  },
  filename: (req, file, cb) => {
      cb(null, "Output");
  }
});

var upload = multer({
  storage:storage,
  fileFilter: function (req, file, cb) {
    if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
      cb(null, true);
    } else {
      console.log("Only jpg, jpeg and png are allowed");
      cb(new Error('File type not supported!'), false);
    }
  },
//   limits: {
//     fileSize: 1024*100,
//   },
});

module.exports = upload;
