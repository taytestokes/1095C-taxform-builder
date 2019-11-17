const LocalStrategy = require("passport-local");
const bcrypt = require("bcrypt");

// register strategy
exports.RegisterStrategy = new LocalStrategy(
  {
    usernameField: "email",
    passReqToCallback: true
  },
  (req, email, password, done) => {
    // get an instance of the db
    const db = req.app.get("db");
    // create a hashed password to store in the db
    const hashedPass = bcrypt.hashSync(password, 15);
    // validate if there is a user already in the db
    db.users
      .find({ email })
      .then(userResults => {
        // check if there are any results
        if (userResults.length > 0) {
          return done(null, false, {
            message: "Username is already taken, please try again!"
          });
        }
        // if the user isn't found, create a new user
        return db.users.insert({
          email,
          password: hashedPass
        });
      })
      .then(user => {
        // remove the password from the user before sending it
        delete user.password;
        // send user back
        done(null, user);
      })
      .catch(error => {
        if (error) throw error;
        done(null, false, { message: "Internal Server Error" });
      });
  }
);
