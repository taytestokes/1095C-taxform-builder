const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 8080;
const IncomingForm = require("formidable").IncomingForm;

// App Initialization
const app = express();

// Options
const corsOptions = {
  origin: "*",
  optionsSucessStatus: 200
};

// Middleware
app.use(express.json());
app.use(cors(corsOptions));

// Endpoints
app.post("/upload", (req, res) => {
  const form = new IncomingForm();

  form.on("file", (field, file) => {});

  form.on("end", () => {
    res.json("Sucess");
  });

  form.parse(req);
});

// API Listening
app.listen(port, () => console.log(`Server running on port: ${port}`));
