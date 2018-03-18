var express = require("express");
var path = require("path");
var app = express(); //express constructor function
var mongoose = require("mongoose");
var dbURL = "mongodb://localhost/comp308-lab2";

mongoose.connect(dbURL, function(error){
    if(error){
        console.log(">>> MongoDB ERROR: " + error.message);
    } else {
        console.log("MongoDB connected at: " + dbURL + " ...");
    }
});

app.set('view engine', 'ejs');
//set Templates directory as views folder for ejs view engine
app.set('views', path.join(__dirname, '/Templates'));
//Routes
app.use(require("./Routes/signup"));
app.use(require("./Routes/login"));
app.use(require("./Routes/feedback"));
app.use(require("./Routes/thankyou"));
app.set("port", process.env.PORT || 3000);

app.listen(app.get("port"), function(){
    console.log("NodeJs server running on port: " + app.get("port"));
});