// Packages
const express = require("express");

// Upload Controller
const UploadController = require("../controllers/upload");

// Auth Router
const UploadRouter = express.Router();

// Routes
UploadRouter.post("/xlsx", UploadController.uploadXLSX);

// Export Router
module.exports = {
  UploadRouter
};
