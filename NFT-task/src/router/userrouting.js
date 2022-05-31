const express = require('express');
const router = express.Router();
const joi =require('joi');
const user= require('../controller/control');



router.get('/',(req,res)=>{
    console.log("get request");
    res.send("welcome to homepage");
});

 router.post('/signup',user.signup);  // import name signup. export name signup
 router.post('/login',user.login);
 //router.patch('/:userid/update',user.updateuser);
 //router.delete('/:userid/delete',user.deleteuser);
 //router.post('/:userid/createcollection',user.createcollection);


 //router.put('/:postname/:userid/comment',user.comment)


 //router.get('/:userid/finddetails',user.find)

module.exports =router;