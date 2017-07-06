var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var SuperHero = require("./models/Superheroes");
var app = express();
var port = 3003;

mongoose.connect("mongodb://localhost/superheroes");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res) {
  SuperHero.find(function(err, superheroes) {
    if (err) throw err;
    res.json({ data: superheroes });
  });
});

app.post("/", function(req, res) {
  res.send("Hello Post");
  var superhero = new SuperHero();
  superhero.name = req.body.name;
  superhero.superpower = req.body.superpower;
  superhero.save(function(superhero) {
    res.send(superhero);
  }, function(err) {
    res.send(err);
  });
});

var server = app.listen(port, function() {
  console.log("Listening on port:",port);
});
