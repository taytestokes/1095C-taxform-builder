// Packages
const exceltojson = require("convert-excel-to-json");
const pdf = require("html-pdf");
const fs = require("fs");

// Utils
const { upload } = require("../Utils/Uploads");

// PDF Layout
const pdfTemplate = require("../PDFTemplates/1095");

// Controller Methods
exports.upload = (req, res) => {
  const { id } = req.session.user;
  const db = req.app.get("db");

  upload(req, res, error => {
    const { Sheet1 } = exceltojson({ sourceFile: req.file.path });
    const fileName = req.file.originalname.split(".")[0];
    const { size, path } = req.file;
    const date = Date.now();

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
      Jul: Sheet1[2].P,
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
      Jul: Sheet1[4].P,
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
      Jul: Sheet1[6].P,
      Aug: Sheet1[6].Q,
      Sep: Sheet1[6].R,
      Oct: Sheet1[6].S,
      Nov: Sheet1[6].T,
      Dec: Sheet1[6].U
    };

    db.documents
      .insert({
        user_id: id,
        name: fileName,
        size,
        created: date,
        path,
        employees_1: employees["1"],
        employees_2: employees["2"],
        employees_3: employees["3"],
        employees_4: employees["4"],
        employees_5: employees["5"],
        employees_6: employees["6"],
        employers_7: employers["7"],
        employers_8: employers["8"],
        employers_9: employers["9"],
        employers_10: employers["10"],
        employers_11: employers["11"],
        employers_12: employers["12"],
        employers_13: employers["13"],
        jan_14: fourTeenth["Jan"],
        feb_14: fourTeenth["Feb"],
        mar_14: fourTeenth["Mar"],
        apr_14: fourTeenth["Apr"],
        may_14: fourTeenth["May"],
        jun_14: fourTeenth["Jun"],
        jul_14: fourTeenth["Jul"],
        aug_14: fourTeenth["Aug"],
        sep_14: fourTeenth["Sep"],
        oct_14: fourTeenth["Oct"],
        nov_14: fourTeenth["Nov"],
        dec_14: fourTeenth["Dec"],
        jan_15: fifthTeenth["Jan"],
        feb_15: fifthTeenth["Feb"],
        mar_15: fifthTeenth["Mar"],
        apr_15: fifthTeenth["Apr"],
        may_15: fifthTeenth["May"],
        jun_15: fifthTeenth["Jun"],
        jul_15: fifthTeenth["Jul"],
        aug_15: fifthTeenth["Aug"],
        sep_15: fifthTeenth["Sep"],
        oct_15: fifthTeenth["Oct"],
        nov_15: fifthTeenth["Nov"],
        dec_15: fifthTeenth["Dec"],
        jan_16: sixthTeenth["Jan"],
        feb_16: sixthTeenth["Feb"],
        mar_16: sixthTeenth["Mar"],
        apr_16: sixthTeenth["Apr"],
        may_16: sixthTeenth["May"],
        jun_16: sixthTeenth["Jun"],
        jul_16: sixthTeenth["Jul"],
        aug_16: sixthTeenth["Aug"],
        sep_16: sixthTeenth["Sep"],
        oct_16: sixthTeenth["Oct"],
        nov_16: sixthTeenth["Nov"],
        dec_16: sixthTeenth["Dec"]
      })
      .then(() => {
        res.send("Files uploaded!");
      });
  });
};

exports.getDocuments = (req, res) => {
  const { id } = req.session.user;
  const db = req.app.get("db");

  db.get_users_documents([id])
    .then(documents => {
      res.send(documents);
    })
    .catch(error => {
      res.send(error);
    });
};

exports.deleteDocument = (req, res) => {
  const { id } = req.params;
  const { path } = req.body;
  const db = req.app.get("db");

  fs.unlink(path, error => {
    // Check for any errors
    if (error) {
      const errorMessage = new Error(error);
      res.send(errorMessage);
    }
    // If no errors remove from DB
    db.delete_user_document([id])
      .then(() => {
        return db.get_users_documents([req.session.user.id]);
      })
      .then(documents => {
        res.send(documents);
      })
      .catch(error => {
        res.send(error);
      });
  });
};

exports.createPDF = (req, res) => {
  const pdfOptions = {
    orientation: "landscape",
    format: "A4"
  };

  pdf
    .create(pdfTemplate(req.body), pdfOptions)
    .toFile(`${__dirname}/PDF/testname.pdf`, error => {
      if (error) throw error;

      res.send("PDF created!");
    });
};

exports.fetchPDF = (req, res) => {
  res.sendFile(`${__dirname}/PDF/testname.pdf`);
};
