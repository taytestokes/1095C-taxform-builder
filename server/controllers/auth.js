// login handler
exports.login = (req, res) => {
  req.session.user = req.user;
  return res.send(req.user);
};

// register handler
exports.register = (req, res) => {
  req.session.user = req.user;
  return res.send(req.user);
};

// check for user session
exports.checkForSession = (req, res) => {
  return res.send(req.session);
};

// clear user session and logout
exports.logout = (req, res) => {
  req.session.destroy();
  return res.send(req.session);
};
