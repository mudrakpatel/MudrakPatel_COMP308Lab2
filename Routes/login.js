var express = require("express");
var router = express.Router();

router.get("/login", function(request, response){
    response.render("login.ejs");
});

router.post("/login", function(request, response){
    response.render("feedback.ejs", {userEmailID : request.body.userEmailID,
                                        userPassword : request.body.userPassword});
});

module.exports = router;