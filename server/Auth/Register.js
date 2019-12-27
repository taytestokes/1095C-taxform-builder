const LocalStrategy = require("passport-local");
const bcrypt = require("bcrypt");

// register strategy
exports.RegisterStrategy = new LocalStrategy(
  {
    usernameField: "email",
    passReqToCallback: true
  },
  (req, email, password, done) => {
    const db = req.app.get("db");
    const hashedPass = bcrypt.hashSync(password, 15);

    db.users
      .find({ email })
      .then(userResults => {
        if (userResults.length > 0) {
          return done(null, false, {
            message: "Username is already taken, please try again!"
          });
        }
        return db.users.insert({
          email,
          password: hashedPass,
        });
      })
      .then(user => {
        delete user.password;
        done(null, user);
      })
      .catch(error => {
        if (error) throw error;
        done(null, false, { message: "Internal Server Error" });
      });
  }
);
