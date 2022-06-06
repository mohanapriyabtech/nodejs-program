const express = require('express');
const router = express.Router();
const joi =require('joi');
const user= require('../controller/usercontrol');
const verify=require('../middleware/middleware');


router.post('/createnft',verify,user.createcollection); // import name signup. export name signup
router.patch('/updatenft',user.updateuser);
router.delete('/deletenft',user.deleteuser);
router.get('/findnft',user.find);
 


module.exports =router;