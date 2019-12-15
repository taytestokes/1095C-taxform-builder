// Packages
const exceltojson = require("convert-excel-to-json");
const pdf = require("html-pdf");
const fs = require("fs");

// Utils
const { upload } = require("../Utils/Uploads");

// PDF Layout
const pdfTemplate = require("../PDFTemplates/1095");

// Controller Methods
exports.upload = async (req, res) => {
  const { id } = req.session.user;
  const db = req.app.get("db");

  await upload(req, res, error => {
    console.log(req.files)
    const { size, path } = req.files[0];
    const createdDate = Date.now();
    const {
      Employee1,
      Employee2,
      Employee3,
      Employee4,
      Employee5,
      Employee6,
      Employee7,
      Employee8,
      Employee9,
      Employee10
    } = exceltojson({ sourceFile: path });

    const employeesInfo = [Employee1, Employee2, Employee3, Employee4, Employee5, Employee6, Employee7, Employee8, Employee9, Employee10];

    for (let i = 0; i < employeesInfo.length; i++) {
      const fileName = `${employeesInfo[i][1].A}${employeesInfo[i][1].C}${employeesInfo[i][3].A}1095C`.split(' ').join('');

      db.documents.insert({
        user_id: id,
        filename: fileName,
        filepath: path,
        filesize: size,
        createddate: createdDate,
        employee_first_name: employeesInfo[i][1].A,
        employee_middle_initial: employeesInfo[i][1].B,
        employee_last_name: employeesInfo[i][1].C,
        employee_ssn: employeesInfo[i][1].D,
        employee_address: employeesInfo[i][1].E,
        employee_city: employeesInfo[i][1].F,
        employee_state: employeesInfo[i][1].G,
        employee_zipcode: employeesInfo[i][1].H,
        employers_name: employeesInfo[i][3].A,
        employers_id: employeesInfo[i][3].B,
        employers_address: employeesInfo[i][3].C,
        employers_phone_number: employeesInfo[i][3].D,
        employers_city: employeesInfo[i][3].E,
        employers_state: employeesInfo[i][3].F,
        employers_zipcode: employeesInfo[i][3].G,
        jan_14: employeesInfo[i][5].A,
        feb_14: employeesInfo[i][5].B,
        mar_14: employeesInfo[i][5].C,
        apr_14: employeesInfo[i][5].D,
        may_14: employeesInfo[i][5].E,
        jun_14: employeesInfo[i][5].F,
        jul_14: employeesInfo[i][5].G,
        aug_14: employeesInfo[i][5].H,
        sep_14: employeesInfo[i][5].I,
        oct_14: employeesInfo[i][5].J,
        nov_14: employeesInfo[i][5].K,
        dec_14: employeesInfo[i][5].L,
        jan_15: employeesInfo[i][7].A,
        feb_15: employeesInfo[i][7].B,
        mar_15: employeesInfo[i][7].C,
        apr_15: employeesInfo[i][7].D,
        may_15: employeesInfo[i][7].E,
        jun_15: employeesInfo[i][7].F,
        jul_15: employeesInfo[i][7].G,
        aug_15: employeesInfo[i][7].H,
        sep_15: employeesInfo[i][7].I,
        oct_15: employeesInfo[i][7].J,
        nov_15: employeesInfo[i][7].K,
        dec_15: employeesInfo[i][7].L,
        jan_16: employeesInfo[i][9].A,
        feb_16: employeesInfo[i][9].B,
        mar_16: employeesInfo[i][9].C,
        apr_16: employeesInfo[i][9].D,
        may_16: employeesInfo[i][9].E,
        jun_16: employeesInfo[i][9].F,
        jul_16: employeesInfo[i][9].G,
        aug_16: employeesInfo[i][9].H,
        sep_16: employeesInfo[i][9].I,
        oct_16: employeesInfo[i][9].J,
        nov_16: employeesInfo[i][9].K,
        dec_16: employeesInfo[i][9].L
      })
    }
  })

  res.send('Files uploaded to database!')
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
  const { filepath } = req.body;
  const db = req.app.get("db");

  /* 
  * Keeping this commented out for now
  * Don't want to remove the documents from the FS until new update
  *  
  * if (fs.existsSync(filepath)) {
  *  fs.unlink(filepath, error => {
  *   if (error) {
  *     const errorMessage = new Error(error);
  *     res.send(errorMessage);
  *   }
  * });
  *}
  */

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

exports.fetchPDF = (req, res) => {
  const { name } = req.params;
  res.sendFile(`${__dirname}/PDF/${name}.pdf`);
};

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
    res.send('PDF was not found, but operations continued execution.')
  }
};
