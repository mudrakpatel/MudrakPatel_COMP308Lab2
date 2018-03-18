var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    FirstName : String,
    LastName : String,
    EmailID : String,
    Password : String,
    City : String,
    Province : String,
    Comments : String
});

module.exports = mongoose.model("User", UserSchema);