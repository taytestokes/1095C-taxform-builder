const fs = require("fs");
const path = require("path");

const clearPdfFiles = () => {
    const folderPath = `${__dirname}/../Controllers/PDF/`

    fs.readdir(folderPath, (err, files) => {
        if (err) throw err;

        for (const file of files) {
            console.log(file)
            fs.unlink(path.join(folderPath, file), err => {
                if (err) throw err;
            });
        }
    });
};

module.exports = {
    clearPdfFiles,
}