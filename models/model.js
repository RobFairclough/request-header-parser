module.exports = {
  getUserData(ip, headers, cb) {
    if (!headers) cb({ error: "no headers" });
    else {
      const obj = {};
      obj.ip = ip;
      obj.software = headers["user-agent"];
      obj.language = headers["accept-language"];
      cb(null, obj);
    }
  }
};
