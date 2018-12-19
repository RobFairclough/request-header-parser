const app = require("express")();
const { sendUserData } = require("./controllers/controller");

app.get("/", (req, res, send) => {
  // homepage
});

app.get("/api/whoami", sendUserData);
module.exports = app;
