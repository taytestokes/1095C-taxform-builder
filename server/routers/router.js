// Routers
const { AuthRouter } = require("./auth");
const { UploadRouter } = require("./documents");

// Add Routes To Server
exports.addRoutes = app => {
  app.use("/auth", AuthRouter);
  app.use("/documents", UploadRouter);
};
