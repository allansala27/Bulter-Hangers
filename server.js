// Required NPM Packages
var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");

// Initialize express into a variable
var app = express();

// Establish Port
var PORT = process.env.PORT || 3000;

// configure Body Parser with express server
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));

// Import Routing File
require('./routes')(app);

// Port listener
app.listen(PORT, function() {
    console.log("Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
});