// login handler
exports.login = (req, res) => {
  return res.send(req.user);
};

// register handler
exports.register = (req, res) => {
  return res.send(req.user);
};
