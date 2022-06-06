const mongoose = require("mongoose");
const bcrypt =require('bcrypt');
const User=require('../model/userschema');
const jwt= require('jsonwebtoken');
const nodemailer=require('nodemailer');
const dotenv =require('dotenv');
const Task=require('../model/taskschema');
const jsonwebtoken= require('jsonwebtoken')
const verifyToken=require('../middleware/middleware');
const decode = require("jsonwebtoken/decode");


// user registration

 exports.signup = async(req,res)=>{ 
     
   const email = req.body.email;
   const fullname = req.body.fullname;
   const username = req.body.username;
   const password = req.body.password;
   const user= await User.create({email,fullname,username,password})  
   .then(user=>{
    console.log(" register completed")    
    res.send(user); 
    }).catch(err=>{
     res.send(err.message)
    })
    
     
 }
   
 // login user
    exports.login=async(req,res)=>{
      try {
        
        const email = req.body.email;
         const password = req.body.password;
      //  console.log(`${email}  and password is: ${password}`);
  
        await User.findOne({email:req.body.email})
         .then(user=>{   // result stored in user variable
         bcrypt.compare(password,user.password)
            if(user){
            jsonwebtoken.sign({User},"secretkey",(err,token)=>{
               var otp = `${Math.floor(1000+Math.random()*9000)}`;  //otp formula         
                 let mailTransporter = nodemailer.createTransport({
                 service: "gmail",
                 auth: {
                   user: 'mohanaspark0105@gmail.com',
                   pass: 'bukvxuaulcixqndh'
                 }
                 });
                  const mailOptions={
                  from:'mohanaspark0105@gmail.com',
                  to:req.body.email,
                  subject:"Verify your email",
                  html:`<p> Enter <b> ${otp} </b> in the app to verify yor email address</p>.<p>This code<b>expires in 1 hour</b>.</p> `
                  };
                  
                   console.log(otp)
                   
                   mailTransporter.sendMail(mailOptions, (error, info) => {
                    if (error) {
                       return console.log(error);
                    }
                    console.log('Mail sent to : %s', user.email);
                    
          
                   });
              res.json({
                message:"we have sent a otp via Email",
                token:token
              });
            })

            } else{
                res.send(error);
                }
             }).catch(err=>{
               res.send(err.message)
             })
        } catch(error){
        res.status(400).send("password not matching");
          }};
           
   // otp verification
    exports.otpverify = async(req,res)=>{    

      const otp = await User.findOne({otp:req.params.otp},{email:req.body.email})
      console.log('otp is correct')
         if(req.params.otp== otp.otp){
         res.send("login success");
         await User.findOneAndUpdate({email:req.body.email},{$unset:{otp:req.params.otp}})
       }
        else {
        res.send('otp is incorrect');
        }
    }

      
exports.updateuser = async(req,res)=>{

     try{
     await User.findByIdAndUpdate({_id:req.params.userid},{$set:req.body})
         
      .then((user)=>{
        if(user){
            console.log("user updated successfully");
            res.status(200).send({message:"user details updated",user})
        }else{
          res.send("invalid userid")
        }
         })
        }
      catch(error){
         console.log(error.message);
         res.send(error.message)
        }
    }

    exports.deleteuser = async(req,res)=>{
    
      await User.findByIdAndDelete({_id:req.params.userid},{new:true})
      .then((user)=>{
        
        if (!user) {
          res.status(400).send(req.params.userid + ' was not found');
        } else {
          console.log("user deleted successfully");
          res.status(200).send(req.params.userid + ' was deleted.');
        }
       }).catch(errors=>{res.send(errors.message)}); 
    }  

     //find the task details by user
    exports.findtask=async(req,res)=>{
        
        await User.findByIdAndUpdate({_id:req.params.userid},{$set:{taskDetails: await Task.find({tasksendBy:req.params.userid})}})
        const result=await User.find({_id:req.params.userid},{new:true}).populate('taskDetails')
        .then(user=>{
        if(req.body.userid==result){
      res.json({
        user
      });console.log(user)}
      else{ res.send("invalid userid")}
    })
     .catch(err=>{console.log(err.message)})
    }

    



  

 

