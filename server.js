var express = require("express");
var bodyParser = require("body-parser");
// Body parser allows reading the req & res from the browser

// Set express = to the variable app
var app = express();
app.use(express.static("public"));
// Uses process.env.PORT for heroku deployment
var PORT = process.env.PORT || 5000;

// must go after app definition
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); 

// Routes are directed to seperate files
// This needs to be required after body parser is set up
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


// Start running the server on .env port or 5000 for local
app.listen((process.env.PORT || 5000), function () {
    console.log("App running on port " + PORT + "!");
  });