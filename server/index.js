const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 8080;

// App Initialization
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// API Listening
app.listen(port, () => console.log(`Server running on port: ${port}`));
