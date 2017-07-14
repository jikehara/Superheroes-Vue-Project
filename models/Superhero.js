var mongoose = require("mongoose");

var SuperHeroSchema = new mongoose.Schema({

  name: String,
  superpower: String,
  img: String
  
});

module.exports = mongoose.model("Superhero",SuperHeroSchema);
