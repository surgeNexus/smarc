var express = require("express");
var router  = express.Router();
var passport = require("passport");
var User = require("../models/user");
var Campground = require("../models/campground");
var middleware = require("../middleware");

router.get("/officers", function(req, res){
    res.render("info/officers")
})

router.get("/newsletter", function(req, res){
    res.render("info/newsletter")
})

router.get("/sk", function(req, res){
    res.render("info/sk")
})

module.exports = router;