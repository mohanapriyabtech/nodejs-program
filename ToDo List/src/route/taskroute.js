const express = require('express');
const router = express.Router();
const task= require('../controller/taskcontrol');
const verify=require('../middleware/middleware');
const { findByIdAndRemove } = require('../model/userschema');
const verifyToken= require('../middleware/middleware');

router.post('/:userid/create',task.taskcreate); 
router.patch('/:taskid/edit',task.taskEdit);
router.delete('/:taskid/delete',task.taskDelete);
router.post('/:taskid/completed',task.taskCompleted);
router.get('/:taskid/finduser',task.finduser);
router.post('/:userid/:taskid/comment',task.taskcomment);

router.post('/mailsend',task.mailsend);
router.get('/:date/viewtask',task.view);


module.exports =router;