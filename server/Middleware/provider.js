const express = require("express");
const cors = require("cors");
const session = require("express-session");
const passport = require("passport");

// Variables from process environment
const { SESSION_SECRET } = process.env;

// Cors Options
const corsOptions = {
  origin: "*",
  optionsSucessStatus: 200
};

// Function to provide middleware to server
exports.provider = app => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static("server/Uploads"));
  app.use(express.static("server/Assets"));
  app.use(express.static("server/Controllers/PDF"));
  app.use(express.static(`${__dirname}/../../build`));
  app.use(cors(corsOptions));
  app.use(passport.initialize());
  app.use(
    session({
      secret: SESSION_SECRET,
      resave: false,
      saveUninitialized: true,
      cookie: { secure: false, maxAge: 6000000 }
    })
  );
};
