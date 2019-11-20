// Packages
const IncomingForm = require("formidable").IncomingForm;

// Upload XLSX file
exports.uploadXLSX = (req, res) => {
  const form = new IncomingForm();

  form.on("file", (field, file) => {
    console.log(file);
  });

  form.on("end", () => {
    res.json("Sucess");
  });

  form.parse(req);
};
