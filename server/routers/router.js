// Routers
const { AuthRouter } = require("./auth");

// Add Routes To Server
exports.addRoutes = app => {
  app.use("/auth", AuthRouter);
};
