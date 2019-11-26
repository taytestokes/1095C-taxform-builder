const massive = require("massive");
const chalk = require("chalk");

// Variables from the process environment
const { CONNECTION_STRING } = process.env;

// Export the function to connect to the database
exports.connect = app => {
  massive(CONNECTION_STRING)
    .then(dbInstance => {
      app.set("db", dbInstance);
      console.log(chalk.cyan("Database Connection: Success!"));
    })
    .catch(error => {
      if (error) throw error;
    });
};
