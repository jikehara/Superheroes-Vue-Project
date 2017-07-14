var express = require("express");
var Router = express.Router();
var Supervillain = require("../models/Villain");

Router.route("/").get(function(req,res) {
  Villain.find(function(err, villains) {
    if (err) {
      res.send(err);
    }else {
      res.json({data: villains});
    }
  });
}).post(function(req, res) {
  console.log("Posting Villain");

  var villain = new Villain();
  villain.name = req.body.name;
  villain.evilPower = req.body.evilPower;
  villain.img = req.body.img;
})

module.exports = Router;
