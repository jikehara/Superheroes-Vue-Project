var express = require("express");
var Router = express.Router();
var Superhero = require("../models/Superhero")

Router.route("/")
  .get(function(req, res) {
    Superhero.find(function(err, superheroes) {
      if (err) {
        res.send(err);
      }
      else {
        res.json({message: "Heroes retrieved!", data: superheroes});
      }
    })
  })
  .post(function(req, res) {
    console.log("Hitting superhero post method");
    var superhero = new Superhero();
    superhero.name = req.body.name;
    superhero.superpower = req.body.superpower;
    superhero.img = req.body.img;
    superhero.save(function(err, superhero) {
      if (err) {
        res.send(err);
      }
      else {
        res.json({message: "Superhero posted: ", data: superhero})
      }
    });
  });

Router.route("/:_id")
.get(function(req, res) {
  // res.send("Got a hero."); // a res.send ends the route, like a break
  Superhero.findById(req.params._id, function(err, superhero) {
    if(err) {
      res.send(err);
    }
    else {
      res.json({ message: "Found Superhero!", data: superhero});
    }
  });
})
.delete(function(req, res) {
  Superhero.remove({ _id: req.params._id}, function(err) {
    if(err) {
      res.send(err);
    }
    else {
      res.send("Superhero Deleted!");
    }
  });
});

module.exports = Router;
