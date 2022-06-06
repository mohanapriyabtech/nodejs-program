const express = require('express');
const router = express.Router();
const joi =require('joi');
const user= require('../controller/usercontrol');
const verify=require('../middleware/middleware');


router.post('/signup',user.signup);
router.post('/adminregister',user.admin);  // import name signup. export name signup
router.post('/login',user.login);
router.patch('/:userid/update',user.updateuser);
router.delete('/:userid/delete',user.deleteuser);
router.post('/tokenverify',verify);


module.exports =router;