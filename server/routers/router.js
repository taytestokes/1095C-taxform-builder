// Routers
const { AuthRouter } = require("./Auth");
const { UploadRouter } = require("./Documents");

// Add Routes To Server
exports.addRoutes = app => {
  app.use("/auth", AuthRouter);
  app.use("/documents", UploadRouter);
};
