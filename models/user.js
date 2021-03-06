var mongoose = require("mongoose"),
    passportLocalMongoose = require("passport-local-mongoose");

var UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    profileImage: String,
    profileInfo: String,
    username: String,
    password: String,
    isAdmin: {type: Boolean, default: false},
    isMember: {type: Boolean, default: false}
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", UserSchema);