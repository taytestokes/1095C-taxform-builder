require("dotenv").config();
require("./Auth/Passport");
const express = require("express");
const port = process.env.PORT || 8080;
const middleware = require("./Middleware/provider");
const database = require("../db/utils/connect");
const router = require("./Routers/Router");
const path = require("path");

// App Initialization
const app = express();

// Middleware
middleware.provider(app);

// Database
database.connect(app);

// Endpoints
router.addRoutes(app);

// Public Serve Build Folder For Client
app.use(express.static(`${__dirname}/../build`));

// Static Route
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});

// API Listening
app.listen(port, () => console.log(`Server running on port: ${port}`));
