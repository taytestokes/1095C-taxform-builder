// Routers
const { AuthRouter } = require("./auth");
const { UploadRouter } = require("./upload");

// Add Routes To Server
exports.addRoutes = app => {
  app.use("/auth", AuthRouter);
  app.use("/upload", UploadRouter);
};
