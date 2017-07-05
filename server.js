var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var port = 3003;

var server = app.listen(port, function() {
  console.log("Listening on port:",port);
})
