var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var SuperHero = require("./models/Superhero");
var Villain = require("./models/Villain");
var mainRoutes = require("./routes/main");
var heroRoutes = require("./routes/superheroes");
var villainRoutes = require("./routes/villains");

var app = express();
var port = 3003;

mongoose.connect("mongodb://localhost/superheroes");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// links to the public directory, our front end which has
// index.html, hero.js, and style.css
app.use(express.static(__dirname+"/public"));
// link to the routes directory
app.use("/api/heroes/",heroRoutes);
app.use("/api/villains/",villainRoutes);
app.use("/api/main/",mainRoutes);

// app.get("/api/heroes/:_id", function(req, res) {
//   SuperHero.findById(req.params._id, function(err, superhero) {
//     if (err) {
//       res.send(err);
//     }
//     else {
//       res.json({ data: superhero, message: "Hero retrieved."});
//     }
//   });
// });
//
//
// app.delete("/api/heroes/:_id", function(req, res) {
//   SuperHero.remove({ _id: req.params._id }, function(err) {
//     if (err) {
//       res.send(err);
//     }
//     else {
//       res.send("Superhero deleted!");
//     }
//   });
// });

var server = app.listen(port, function() {
  console.log("Listening on port:",port);
});
