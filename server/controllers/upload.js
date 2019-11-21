// Packages
const excelToJSON = require("xlsx-to-json-lc");

// Utils
const { upload } = require("../utils/uploads");

// Upload XLSX file
exports.uploadXLSX = (req, res) => {
  upload(req, res, error => {
    excelToJSON(
      {
        input: req.file.path,
        output: null,
        lowerCaseHeaders: true
      },
      (err, result) => {
        console.log(result);
      }
    );
  });
};
