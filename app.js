var express = require("express");
var path = require("path");
var app = express(); //express constructor function

app.set('view engine', 'ejs');
//set Templates directory as views folder for ejs view engine
app.set('views', path.join(__dirname, '/Templates'));
//Handle the Home page route (Temporarily ONLY)
app.get("/", function(request, response){
    response.send("<h1>Welcome!</h1>");
});
app.set("port", process.env.PORT || 3000);
app.listen(app.get("port"));