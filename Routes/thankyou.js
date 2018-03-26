var express = require("express");
var router = express.Router();

router.get("/thankyou", function(request, response) {
    response.render("thankyou.ejs");
});

module.exports = router;