var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var SuperHero = require("./models/Superheroes");
var app = express();
var port = 3003;

mongoose.connect("mongodb://localhost/superheroes");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname+"/public"));

app.get("/", function(req, res) {
  SuperHero.find(function(err, superheroes) {
    if (err) throw err;
    res.json({ data: superheroes });
  });
});

app.get("/:_id", function(req, res) {
  SuperHero.findById(req.params._id, function(err, superhero) {
    if (err) throw err;
    res.json({ data: superhero, message: "Hero retrieved."});
  });
});

app.post('/', function(req, res) {
  var superhero = new SuperHero();
  superhero.name = req.body.name;
  superhero.superpower = req.body.superpower;
  superhero.save().then(function(superhero) {
    res.send(superhero);
  }, function(err) {
    res.send("Failed to save :( ")
  });
});

// app.delete("/:_id", function(req, res) {
//   SuperHero.findById(req.params._id, function(err, superhero) {
//     if (err) throw err;
//     res.delete({ data: superhero, message: "Hero deleted."});
//   });
// });

var server = app.listen(port, function() {
  console.log("Listening on port:",port);
});
