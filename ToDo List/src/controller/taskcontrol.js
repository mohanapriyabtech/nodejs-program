const mongoose = require("mongoose");
const nodemailer=require("nodemailer");
const cron = require("node-cron");
const User=require('../model/userschema');
const Task=require('../model/taskschema');
const verifyToken=require('../middleware/middleware');



    // task creation
    exports.taskcreate =async(req,res)=> {
        
        const id =req.params.userid;
        
        await Task.create({
        task:req.body.task,
        taskDescription:req.body.taskDescription,
        
        tasksendBy: await User.findOne({ _id:id } ,{ new:true })})
         .then(result=>{
          res.json({
            message:"Task created sucessfully",
            result
          });
          
         console.log(result)
         
          })
        
        .catch(err=>{console.log(err.message)})
      
    }

exports.taskEdit = async(req,res)=>{
  await Task.findByIdAndUpdate({_id:req.params.taskid},{$set:req.body})
                 
  .then(task=>{
      if(task){
    console.log(" Task edited successfully");
    res.status(200).send({message:"Task Edited",task})
      }else{
          res.send("invalid id")
      }
  })
  .catch(error=>{
    console.log(error.message);
    res.send(error.message)
    })
    }

    exports.taskDelete = async(req,res)=>{
    
        await Task.findByIdAndDelete({_id:req.params.taskid},{new:true})
        .then((task)=>{
          
          if (!task) {
            res.status(400).send('Taskid not found');
          } else {
            console.log("user deleted successfully");
            res.status(200).send('Task deleted successfully.');
          }
         }).catch(errors=>{res.send(errors.message)}); 
      }  
  
     

    exports.taskCompleted = async(req,res)=>{
        const status= req.body.status;
        await Task.findByIdAndUpdate({_id:req.params.taskid},{$set:{status:"Completed"}},{new:true})
                       
        .then((task)=>{
            if(task){
          console.log(" Task Completed successfully");
          res.status(200).send({message:"Task Edited",task})
            }else{
                res.send("invalid id")
            }
        }).catch(error=>{
          console.log(error.message);
          res.send(error.message)
          })
          }

     //find the user by task
    exports.finduser=async(req,res)=>{
        
        await Task.findByIdAndUpdate({_id:req.params.taskid},{$set:{tasksendBy: await User.find({taskDetails:req.params.taskid})}})
        await Task.find({_id:req.params.taskid}).populate('tasksendBy')
        
      .then(result=>{
      res.json({
        message:"user details here",
        result
      });console.log(result)})
     .catch(err=>{console.log(err.message)})

    }
    exports.view =async(req,res)=>{
      
          await Task.find({UpdatedAt:req.params.date},{new:true}).populate('task').populate('status')
          .then(result=>
          
           {
            res.json({
              message:"task details here",
              result,
            });console.log(result)})

          .catch(err=>{console.log(err.message)})
          }
          // comment the task by userid and taskid
     exports.taskcomment= async(req,res)=> {
    
      const taskid =req.params.taskid;
      const userid =req.params.userid;
       
      await User.findOne({_id:userid}) 
      await Task.create({
      taskdetails:await Task.findOne({_id:taskid}),
      comment:req.body.comment,
      commentby:await User.findOne({_id:userid},{new:true})})
      
      .then(result=>{
        res.json({
          message:"comment updated sucessfully",
          result 
        });
        console.log(result);
      })

      .catch(err=>{console.log(err.message)})
    
    }

          exports.mailsend = async(req,res)=>{

                 try{
                const user = await User.find()
                const userEmails=user.map(item=>item.email)
                console.log(userEmails) 

                const task =await Task.find().populate('tasksendBy')
                console.log(task)
                //const taskemail=task.map(item=>item.email)
                //console.log(taskemail)
                const taskdetail=task.map(item=>{
                  
                })

                console.log(taskdetail)

                
                  
                
                setTimeout(() => {
                  
                //  cron.schedule( '00 32 21 * * * ' ,()=>{
                let mailTransporter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                  user: 'mohanaspark0105@gmail.com',
                  pass: 'xabqycrzwjarmooq'
                }
                });
                
                 
                  const mailOptions={
                  from:'mohanaspark0105@gmail.com',
                  to: `${userEmails[e]}`,
                  subject:"Task Status Report",
                  html:`<p> ${taskdetail[t]} </p>`,
                 };
                 
                
        
                
                 mailTransporter.sendMail(mailOptions, (error, info) => {
                   if (error) {
                      return console.log(error);
                   }
                   console.log('Message sent:');
                   res.send("E-mail sent successfully")
                  })
         
                 ,2000 });
                
              }
                
              
              
              
               catch(error){
                     console.log(error.message);
                     res.send(error.message)
                 }
                }
                
                
          
             
         
         

