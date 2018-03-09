var express = require("express");
var router = express.Router();

router.get("/", function(request, response){
    response.render("signup.ejs");
});

router.post("/signup", function(request, response){
    response.render("login.ejs", {userEmailID : request.body.userEmailID, 
                                    userPassword : request.body.userPassword});
});

module.exports = router;