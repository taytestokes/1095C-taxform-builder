// Packages
const express = require("express");

// Upload Controller
const UploadController = require("../controllers/documents");

// Auth Router
const UploadRouter = express.Router();

// Routes
UploadRouter.post("/upload", UploadController.upload);
UploadRouter.get("/all", UploadController.getDocuments);
UploadRouter.delete("/delete/:id", UploadController.deleteDocument);
UploadRouter.post("/createPDF", UploadController.createPDF);
UploadRouter.get("/fetchPDF", UploadController.fetchPDF);

// Export Router
module.exports = {
  UploadRouter
};
