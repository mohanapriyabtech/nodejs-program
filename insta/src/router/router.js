var express = require('express');
const mongoose =require('mongoose');

var joi =require('joi');


var user= require('../controller/control');

var router = express.Router();

router.get('/',(req,res)=>{
    console.log("get request");
    res.send("welcome to homepage");
});

 router.post('/signup',user.signup);  // import name signup. export name signup
 router.get('/otpverify/:otp',user.otpverify);
 router.post('/login',user.login);
 router.post('/:id',user.postcreation);
 router.get('/find',user.find)

module.exports =router;