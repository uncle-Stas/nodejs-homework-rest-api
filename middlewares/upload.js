const path = require('path');
const multer = require('multer');

const uploadDir = path.join(__dirname, '../', 'temp');

const storage = multer.diskStorage({
  destination: uploadDir,
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
  limits: {
    fileSize: 1048576,
  },
});

const upload = multer({
  storage,
});

module.exports = upload;
