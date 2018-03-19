var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var CustomerSchema = new Schema({
    FirstName : {
        type: String,
        required: [true, 'NO FIRST NAME PROVIDED']
      },
    LastName : {
        type: String,
        required: [true, 'NO LAST NAME PROVIDED']
      },
    EmailID : {
        type: String,
        required: [true, 'NO EMAIL PROVIDED']
      },
    Password : {
        type: String,
        required: [true, 'NO PASSWORD PROVIDED']
      },
    City : String,
    Province : String,
    Comments : String
});

module.exports = mongoose.model("Customer", CustomerSchema);