var express = require("express");
var Router = express.Router();

Router.route("/", function(req, res) {
  res.json({ message: "This is main" });
})

module.exports = Router;
