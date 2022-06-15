const express = require('express');
const router = express.Router();
const taskv1= require('../controller/v1.0.0/taskControl');
const passport = require("passport");
require("../middleware/passportJwt")(passport);


router.post('/v1/:userid/create',passport.authenticate("jwt", { session: false }),taskv1.taskCreate); 
router.patch('/v1/:taskid/edit',taskv1.taskEdit);
router.delete('/v1/:taskid/delete',taskv1.taskDelete);
router.post('/v1/:taskid/completed',passport.authenticate("jwt", { session: false }),taskv1.taskCompleted);
router.get('/v1/finduser',taskv1.findUser);
router.post('/v1/:userid/:taskid/comment',taskv1.taskComment);

router.post('/v1/mailsend',taskv1.mailSend);
router.get('/v1/datewisetask',taskv1.todayTask); 





module.exports =router;