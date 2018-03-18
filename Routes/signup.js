var express = require("express");
var router = express.Router();

router.get("/", function(request, response){
    response.render("signup.ejs");
});

router.post("/signup", function(request, response){

});

module.exports = router;