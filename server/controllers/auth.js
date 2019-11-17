// login handler
exports.login = (req, res) => {
  req.session.user = req.user;
  console.log(req.session);
  return res.send(req.user);
};

// register handler
exports.register = (req, res) => {
  req.session.user = req.user;
  return res.send(req.user);
};

// check for user session
exports.checkForSession = (req, res) => {
  console.log(req.session);
  return res.send(req.session);
};
