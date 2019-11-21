// Packages
const exceltojson = require("convert-excel-to-json");

// Utils
const { upload } = require("../utils/uploads");

// Upload XLSX file
exports.uploadXLSX = (req, res) => {
  upload(req, res, error => {
    const { Sheet1 } = exceltojson({ sourceFile: req.file.path });

    const employees = {
      1: Sheet1[2].B,
      2: Sheet1[2].C,
      3: Sheet1[2].D,
      4: Sheet1[2].E,
      5: Sheet1[2].F,
      6: Sheet1[2].G
    };

    const employers = {
      7: Sheet1[5].B,
      8: Sheet1[5].C,
      9: Sheet1[5].D,
      10: Sheet1[5].E,
      11: Sheet1[5].F,
      12: Sheet1[5].G,
      13: Sheet1[5].H
    };

    const fourTeenth = {
      Jan: Sheet1[2].J,
      Feb: Sheet1[2].K,
      Mar: Sheet1[2].L,
      Apr: Sheet1[2].M,
      May: Sheet1[2].N,
      Jun: Sheet1[2].O,
      July: Sheet1[2].P,
      Aug: Sheet1[2].Q,
      Sep: Sheet1[2].R,
      Oct: Sheet1[2].S,
      Nov: Sheet1[2].T,
      Dec: Sheet1[2].U
    };

    const fifthTeenth = {
      Jan: Sheet1[4].J,
      Feb: Sheet1[4].K,
      Mar: Sheet1[4].L,
      Apr: Sheet1[4].M,
      May: Sheet1[4].N,
      Jun: Sheet1[4].O,
      July: Sheet1[4].P,
      Aug: Sheet1[4].Q,
      Sep: Sheet1[4].R,
      Oct: Sheet1[4].S,
      Nov: Sheet1[4].T,
      Dec: Sheet1[4].U
    };

    const sixthTeenth = {
      Jan: Sheet1[6].J,
      Feb: Sheet1[6].K,
      Mar: Sheet1[6].L,
      Apr: Sheet1[6].M,
      May: Sheet1[6].N,
      Jun: Sheet1[6].O,
      July: Sheet1[6].P,
      Aug: Sheet1[6].Q,
      Sep: Sheet1[6].R,
      Oct: Sheet1[6].S,
      Nov: Sheet1[6].T,
      Dec: Sheet1[6].U
    };
    // WRITE LOGIC TO STORE INFO INTO DATABASE AND CONVERT TO A PDF?
  });
};
