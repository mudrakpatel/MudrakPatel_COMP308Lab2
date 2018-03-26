var express = require("express");
var router = express.Router();
var CustomerModel = require("../Models/Customer.model.js");

router.post("/feedback", function(request, response) {
    CustomerModel.findOneAndUpdate({
            FirsNamet: request.body.userFirstName,
            LastName: request.body.userFirstName,
            EmailID: request.body.userEmailID
        }, { $set: { Comments: request.body.userFeedback } }, { new: true },
        function(error, udatedCustomer) {
            if (error) {
                console.log(">>> MongoDB ERROR: " + error.message);
                response.status(200).send(error);
            } else {
                //return udatedCustomer;
                console.log(udatedCustomer);
                response.render("thankyou.ejs", { routeCustomer: udatedCustomer });
            }
        });
});

module.exports = router;