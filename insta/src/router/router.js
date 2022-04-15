var express = require('express');
var mongoose =require('mongoose');

var joi =require('joi');


var signup = require('../controller/control');
var verify=require('../controller/control')

var router = express.Router();

router.get('/',(req,res)=>{
    console.log("get request");
    res.send("welcome to homepage");
});

 router.post('/signup',signup.signup);  // import name signup. export name signup
 router.get('/otpverify/:otp',signup.otpverify);

module.exports =router;