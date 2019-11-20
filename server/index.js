require("dotenv").config();
require("./auth/passport");
const express = require("express");
const port = process.env.PORT || 8080;
const IncomingForm = require("formidable").IncomingForm;
const middleware = require("./middleware/provider");
const database = require("./db/utils/connect");
const router = require("./routers/router");

// App Initialization
const app = express();

// Middleware
middleware.provider(app);

// Database
database.connect(app);

// Endpoints
router.addRoutes(app);

// Endpoints
app.post("/upload", (req, res) => {
  const form = new IncomingForm();

  form.on("file", (field, file) => {
    console.log(file);
  });

  form.on("end", () => {
    res.json("Sucess");
  });

  form.parse(req);
});

// API Listening
app.listen(port, () => console.log(`Server running on port: ${port}`));
