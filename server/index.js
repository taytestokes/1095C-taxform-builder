/* OS and Node Cluster Modules */
require("dotenv").config();
const cluster = require("cluster");
const os = require("os");
const chalk = require("chalk");
const environment = process.env.NODE_ENV;

/* Check Master Cluster and Create Child Workers */
if (cluster.isMaster && environment === 'production') {
  // Define number of CPU
  const numOfCpus = os.cpus().length;

  console.log(chalk.green(`Master cluster setting up ${numOfCpus} workers`));

  // Create worker for every CPU
  for (let i = 0; i < numOfCpus; i++) {
    cluster.fork();
  }

  // Checks for online status
  cluster.on("online", worker => {
    console.log(chalk.yellow(`Worker ${worker.process.pid} is online`));
  });

  // Check for exit status
  cluster.on("exit", (worker, code, signal) => {
    console.log(chalk.red(`Worker ${worker.process.pid} died with code ${code}, and signal ${signal}`));
    console.log(chalk.green("Starting a new worker"));
    cluster.fork();
  });
} else {
  // Modules
  const express = require("express");
  const port = process.env.PORT || 8080;
  const middleware = require("./Middleware/Provider");
  const database = require("../db/utils/connect");
  const router = require("./Routers/Router");
  const path = require("path");
  require("./Auth/Passport");

  // App Initialization
  const app = express();

  // Middleware
  middleware.provider(app);

  // Database
  database.connect(app);

  // Endpoints
  router.addRoutes(app);

  // Static Route
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../build/index.html"));
  });

  // API Listening
  app.listen(port, () => console.log(`Server running on port: ${port}`));
}
