var express = require("express");
var router = express.Router();

router.get("/login", function(request, response){
    response.render("login.ejs");
});

router.post("/login", function(request, response){
    
});

module.exports = router;