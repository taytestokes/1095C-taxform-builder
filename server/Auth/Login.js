const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");

// Login Strategy
exports.LoginStrategy = new LocalStrategy(
  {
    usernameField: "email",
    passReqToCallback: true
  },
  (req, email, password, done) => {
    const db = req.app.get("db");
    if (email.length === 0 || password.length === 0) {
      return done(null, false, {
        message: "Email and Password are required."
      });
    }
    db.users
      .find({ email })
      .then(userResults => {
        if (userResults.length === 0) {
          return done(null, false, {
            message: "User does not exist. Please try again."
          });
        }
        const user = userResults[0];
        const storedPassword = user.password;
        if (!bcrypt.compareSync(password, storedPassword)) {
          return done(null, false, {
            message: "Username or Password are incorrect"
          });
        }
        delete user.password;
        return done(null, user);
      })
      .catch(error => {
        if (error) throw error;
      });
  }
);
