// Packages
const pdf = require("html-pdf");
const fs = require("fs");

// PDF Layout
const pdfTemplate = require("../PDFTemplates/1095");

/* Gets a single users documents */
exports.getUserDocuments = (req, res) => {
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

/* Deletes a 1095 document from db */
exports.deleteDocument = (req, res) => {
  const { id } = req.params;
  const db = req.app.get("db");

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
};

/* Creates PDF file */
exports.createPDF = (req, res) => {
  const pdfOptions = {
    orientation: "landscape",
    format: "A4"
  };

  pdf
    .create(pdfTemplate(req.body), pdfOptions)
    .toFile(
      `${__dirname}/PDF/${req.body.filename}${req.body.createddate}.pdf`,
      (error, response) => {
        if (error) {
          const errorMessage = new Error(error);
          res.send(errorMessage);
        } else {
          res.send("PDF created!");
        }
      }
    );
};

/* Fetches the PDF file */
exports.fetchPDF = (req, res) => {
  const { name } = req.params;
  res.sendFile(`${__dirname}/PDF/${name}.pdf`);
};

/* Deletes PDF file if exists in FS */
exports.deletePDF = (req, res) => {
  const { name } = req.params;
  const filePath = `${__dirname}/PDF/${name}.pdf`;

  if (fs.existsSync(filePath)) {
    fs.unlink(filePath, error => {
      if (error) {
        const errorMessage = new Error(error);
        return res.send(errorMessage);
      } else {
        res.send("PDF file deleted!");
      }
    });
  } else {
    res.send('PDF was not found, but operations continued execution')
  };
};

/* Gets All Documents */
exports.getDocuments = (req, res) => {
  const db = req.app.get("db");

  db.get_documents()
    .then((documents) => {
      res.send(documents)
    })
};

/* Creates Document From Document Creater */
exports.createDocument = (req, res) => {
  const db = req.app.get("db");
  const {
    employee_first_name,
    employee_middle_name,
    employee_last_name,
    employee_ssn,
    employee_address,
    employee_city,
    employee_state,
    employee_zipcode,
    employers_name,
    employers_id,
    employers_address,
    employers_phone_number,
    employers_city,
    employers_state,
    employers_zipcode,
    jan_14,
    feb_14,
    mar_14,
    apr_14,
    may_14,
    jun_14,
    jul_14,
    aug_14,
    sep_14,
    oct_14,
    nov_14,
    dec_14,
    jan_15,
    feb_15,
    mar_15,
    apr_15,
    may_15,
    jun_15,
    jul_15,
    aug_15,
    sep_15,
    oct_15,
    nov_15,
    dec_15,
    jan_16,
    feb_16,
    mar_16,
    apr_16,
    may_16,
    jun_16,
    jul_16,
    aug_16,
    sep_16,
    oct_16,
    nov_16,
    dec_16
  } = req.body;
  const { id, first_name, last_name } = req.session.user;

  const date = Date.now();
  const fileName = `${employee_first_name.replace(/\s/g, "")}${employee_middle_name.replace(/\s/g, "")}${employee_last_name.replace(/\s/g, "")}-${employers_name.replace(/\s/g, "")}-1095`;
  const createdBy = `${first_name} ${last_name}`;
  const middleInitial = employee_middle_name.split('')[0];

  db.documents.insert({
    user_id: id,
    filename: fileName,
    createddate: date,
    createdby: createdBy,
    employee_first_name,
    employee_middle_name: middleInitial,
    employee_last_name,
    employee_ssn,
    employee_address,
    employee_city,
    employee_state,
    employee_zipcode,
    employers_name,
    employers_id,
    employers_address,
    employers_phone_number,
    employers_city,
    employers_state,
    employers_zipcode,
    jan_14,
    feb_14,
    mar_14,
    apr_14,
    may_14,
    jun_14,
    jul_14,
    aug_14,
    sep_14,
    oct_14,
    nov_14,
    dec_14,
    jan_15,
    feb_15,
    mar_15,
    apr_15,
    may_15,
    jun_15,
    jul_15,
    aug_15,
    sep_15,
    oct_15,
    nov_15,
    dec_15,
    jan_16,
    feb_16,
    mar_16,
    apr_16,
    may_16,
    jun_16,
    jul_16,
    aug_16,
    sep_16,
    oct_16,
    nov_16,
    dec_16
  })
    .then(() => {
      res.status(200).send('Document created!');
    });
};