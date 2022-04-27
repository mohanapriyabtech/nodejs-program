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

 router.patch('/:userid/:followid/follow',user.follow);
 router.patch('/:userid/:unfollowid/unfollow',user.unfollow);

 router.post('/:userid/postcreation',user.postcreation);
 router.put('/:userid/:postid/likes',user.likes);
 router.put('/:userid/:postid/unlike',user.unlike);
 router.put('/:postname/:userid/comment',user.comment)


 router.get('/:userid/finddetails',user.find)

module.exports =router;