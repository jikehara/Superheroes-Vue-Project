var express = require("express");
var Router = express.Router();
var Superhero = require("../models/Superheroes")

Router.route("/").get(function(req, res) {
  Superhero.find(function(err, superheroes) {
    if(err) {
      res.send(err);
    }else {
      res.json({data: superheroes});
    }
  })
}).post(function(req, res) {
  console.log("Hitting superhero post method");

  var superhero = new Superhero();

  superhero.name = req.body.name;
  superhero.superpower = req.body.superpower;
  superhero.img = req.body.img;

  superhero.save().then(function(superhero) {
    res.json({message: "Hero created:", data: superhero});
  }), function(err) {
    res.send(err);
  }
})

Router.route("/:_id").get(function(req, res) {
  res.send("Got a hero.");
  // Superhero.findById();
})

module.exports = Router;
