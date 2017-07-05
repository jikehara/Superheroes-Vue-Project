var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var superHero = require("./models/Superheroes");
var app = express();
var port = 3003;

mongoose.connect("mongodb://localhost/superheroes");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res) {
  res.json({ message: "Hello World" });
});

app.post("/", function(req, res) {
  var superhero = new superHero();
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
