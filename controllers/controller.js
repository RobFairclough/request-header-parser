const { getUserData } = require("../models/model");

exports.sendUserData = (req, res, next) => {
  let ip;
  if (req.headers["x-forwarded-for"])
    ip = req.headers["x-forwarded-for"].split(",")[0];
  else ip = req.connection.remoteAddress;

  getUserData(ip, req.headers, (err, parsed) => {
    if (err) next(err);
    else res.send(parsed);
  });
};
