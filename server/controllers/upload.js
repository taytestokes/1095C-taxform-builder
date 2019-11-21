// Packages
const exceltojson = require("convert-excel-to-json");

// Utils
const { upload } = require("../utils/uploads");

// Upload XLSX file
exports.uploadXLSX = (req, res) => {
  upload(req, res, error => {
    const result = exceltojson({ sourceFile: req.file.path });
    console.log(result);
  });
};
