const passport = require("passport");

// Strategies
const login = require("./Login");
const register = require("./Register");

// Passport Config
passport.use("login", login.LoginStrategy);
passport.use("register", register.RegisterStrategy);

// Serialize and Deserialize the user
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  done(null, id);
});
