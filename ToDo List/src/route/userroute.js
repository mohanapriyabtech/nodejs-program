const express = require('express');
const router = express.Router();
const user= require('../controller/usercontrol');
const verifyToken=require('../middleware/middleware');

router.post('/signup',user.signup); // import name signup. export name signup
router.post('/:userid/login',user.login);
router.post('/:otp/otpverify',user.otpverify);
router.patch('/:userid/update',verifyToken,user.updateuser)
router.post('/:userid/delete',verifyToken,user.deleteuser);
router.get('/:userid/find',user.findtask)
//router.post('/tokenverify',verify);

module.exports =router;