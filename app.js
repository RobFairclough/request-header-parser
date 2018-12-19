const app = require("express")();
const { sendUserData } = require("./controllers/controller");

app.get("/", (req, res, send) => {
  // homepage
  res.send({
    msg: `Usage: /api/whoami will return some details, your ip, software and preferred languages`
  });
});

app.get("/api/whoami", sendUserData);
module.exports = app;
