// Packages
const multer = require("multer");

// Multer Configuration
const storage = multer.diskStorage({
  destination: (req, file, next) => {
    next(null, "server/uploads/");
  },
  filename: (req, file, next) => {
    next(null, file.fieldname + Date.now());
  }
});

// Multer Middleware
exports.upload = multer({ storage }).single("file");
