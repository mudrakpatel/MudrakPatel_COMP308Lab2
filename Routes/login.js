var express = require("express");
var router = express.Router();
var CustomerModel = require("../Models/Customer.model.js");

router.get("/login", function(request, response) {
    response.render("login.ejs");
});

router.post("/login", function(request, response) {
    var tempEmail = request.body.userEmailID;
    var tempPassword = request.body.userPassword;
    CustomerModel.findOne({ EmailID: tempEmail, Password: tempPassword },
        function(error, customer) {
            if (error) {
                console.log(">>> ERROR: " + error.message);
                response.status(200).send(error);
            } else {
                console.log(customer);
                response.render("feedback.ejs", { routeCustomer: customer });
            }
        });
});

module.exports = router;