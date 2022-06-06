const express=require('express');
const router = express.Router();
const adminverify=require('../middleware/adminverify')
const admin = require('../controllers/admin');


router.post('/accept/:id',adminverify,admin.requestaccept)
router.post('/reject/:id',adminverify,admin.requestreject)
router.get('/pending',adminverify,admin.requestpending)


module.exports=router

