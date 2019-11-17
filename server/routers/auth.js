const express = require("express");
const passport = require("passport");

// Auth Controller
const AuthController = require("../controllers/auth");

// Auth Router
const AuthRouter = express.Router();

// Routes
AuthRouter.post("/login", passport.authenticate("login"), AuthController.login);
AuthRouter.post(
  "/register",
  passport.authenticate("register"),
  AuthController.register
);

// Export Router
module.exports = {
  AuthRouter
};
