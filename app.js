var express = require("express");
var path = require("path");
var app = express(); //express constructor function

app.set('view engine', 'ejs');
//set Templates directory as views folder for ejs view engine
app.set('views', path.join(__dirname, '/Templates'));
app.set("port", process.env.PORT || 3000);