// Packages
const express = require("express");

// Upload Controller
const UploadController = require("../Controllers/Documents");

// Auth Router
const UploadRouter = express.Router();

// Routes
UploadRouter.post("/upload", UploadController.upload);
UploadRouter.get("/all", UploadController.getDocuments);
UploadRouter.post("/delete/:id", UploadController.deleteDocument);
UploadRouter.post("/createPDF", UploadController.createPDF);
UploadRouter.get("/fetchPDF/:name", UploadController.fetchPDF);
UploadRouter.delete("/deletePDF/:name", UploadController.deletePDF);

// Export Router
module.exports = {
  UploadRouter
};
