const passport = require("passport");

// Strategies
const login = require("./login");
const register = require("./register");

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
