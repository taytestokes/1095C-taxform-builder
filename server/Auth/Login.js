const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");

// Login Strategy
exports.LoginStrategy = new LocalStrategy(
  {
    usernameField: "email",
    passReqToCallback: true
  },
  (req, email, password, done) => {
    // get the db instance
    const db = req.app.get("db");
    // check to make sure the username and password are present
    if (email.length === 0 || password.length === 0) {
      return done(null, false, {
        message: "Email and Password are required."
      });
    }
    // look for the user in the database
    db.users
      .find({ email })
      .then(userResults => {
        // if the user does not exist return an error message
        if (userResults.length === 0) {
          return done(null, false, {
            message: "User does not exist. Please try again."
          });
        }
        // if the user exists, store in a variable
        const user = userResults[0];
        // get the users password
        const storedPassword = user.password;
        // compare the password sent through the request to see if it matches the stored password
        if (!bcrypt.compareSync(password, storedPassword)) {
          // if he password is invalid, return an error message
          return done(null, false, {
            message: "Username or Password are incorrect"
          });
        }
        // if the passwords match, remove the users password and send back the user info
        delete user.password;
        // return the user
        return done(null, user);
      })
      .catch(error => {
        // catch the error, if there is one
        if (error) throw error;
      });
  }
);
