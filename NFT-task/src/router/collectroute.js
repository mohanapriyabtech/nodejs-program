const express = require('express');
const router = express.Router();
const joi =require('joi');
const user= require('../controller/usercontrol');
const verify=require('../middleware/middleware');


router.post('/createcollection',adminverify,user.createcollection); // import name signup. export name signup
router.patch('/updatecollection',user.updateuser);
router.delete('/deletecollection',user.deleteuser);
router.get('/findcollection',user.find);
 


module.exports =router;