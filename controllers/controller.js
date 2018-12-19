const { getUserData } = require("../models/model");

exports.sendUserData = (req, res, next) => {
  getUserData(req.ip, req.headers, (err, parsed) => {
    if (err) next(err);
    else res.send(parsed);
  });
};
