var exphbs = require("express-handlebars")

module.exports = function(app){

        // Store controllers as variables
        var home = require('./controllers/Home');
        var store = require('./controllers/Store');
        var quote = require('./controllers/Quote');

        app.use('/', home);
        app.use('/store', store);
        app.use('/quote', quote);


        // Set Handlebars as the default templating engine.
        app.engine("handlebars", exphbs({ defaultLayout: "main" }));
        app.set("view engine", "handlebars");
   //other routes..
}