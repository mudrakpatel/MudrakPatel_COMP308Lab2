var express = require("express");
var router = express.Router();
var CustomerModel = require("../Models/Customer.model.js");

router.get("/", function(request, response){
    response.render("signup.ejs");
});

router.post("/signup", function(request, response){
    var customerData = {FirstName : request.body.userFirstName,
                    LastName : request.body.userLastName,
                    EmailID: request.body.userEmailID,
                    Password: request.body.userPassword,
                    City : request.body.userCity,
                    Province : request.body.userProvince,
                    Comments : ""};
    var customer = new CustomerModel(customerData);
    customer.save(function(error){
        if(error){
            console.log(">>> MongoDB ERROR: Document not created");
        } else {
            console.log("--- Document created successfully.");
            console.log(customer);
            response.render("login.ejs");
        }
    });
});

module.exports = router;