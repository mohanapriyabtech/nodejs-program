var mongoose = require("mongoose");
var bcrypt =require('bcrypt');
const User=require('../model/usercreate');
const jwt= require('jsonwebtoken');
const nodemailer=require('nodemailer');
const dotenv =require('dotenv');
const Post=require('../model/postcreate');
const res = require("express/lib/response");
const req = require("express/lib/request");
const { optional } = require("joi");


// signup user
exports.signup = async(req,res)=>{ 
     
        const email = req.body.email;
        const fullname = req.body.fullname;
        const username = req.body.username;
        const password = req.body.password;
        const confirmpassword=req.body.confirmpassword;
    
       
        if(password == confirmpassword){
            console.log('correct password ')

        
         
         var otp = `${Math.floor(1000+Math.random()*9000)}`;
        
        console.log(otp);           
        
        const user= await User.create({email,fullname,username,password,confirmpassword,otp})  
        console.log(" register completed")    
        res.send(user);  
        try{

        let mailTransporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'mohanapriyabtechit2412@gmail.com',
                pass: 'mohanapriyavidhun'
            }
        });
                  const mailOptions={
                    from:'mohanapriyabtechit2412@gmail.com',
                    to:req.body.email,
                    subject:"Verify your email",
                    html:`<p> Enter <b> ${otp} </b> in the app to verify yor email address</p>.<p>This code<b>expires in 1 hour</b>.</p> `
        
                };
                 console.log("email sent successfully") ;

                mailTransporter.sendMail(mailOptions, (error, info) => {
                    if (error) {
                        return console.log(error);
                    }
                    console.log('Message sent: %s', info.messageId);
                    
            
                    res.render('otp');

            
                });
        } catch(error){
            console.log(error);
        
        }}else{
            console.log('incorrect password ')
        }
    }
// otp verification
    exports.otpverify = async(req,res)=>{ 
         
        
   const otp = await User.findOneAndUpdate({otp:req.params.otp},{$unset:{otp:req.params.otp}})
            
        if (req.params.otp == otp.otp) {
          res.send("You has been successfully registered");
        }
         else {
         res.render('otp', { msg: 'otp is incorrect' });
         }
     
   
        }


        // login user


 exports.login=async(req,res)=>{
    try {
  
       var email = req.body.email;
       var password = req.body.password;
  
       
  
       console.log(`${email}  and password is: ${password}`);
  
        await User.findOne({email:req.body.email})
         
             .then(user=>{   // result stored in user variable
                bcrypt.compare(password,user.password)
                 if(user){

                  res.send("login successfully");
                  console.log("login successfully")
                 } else{
                    res.send("error");
                }
             })

             } catch(error){
        res.status(400).send("password not matching");
          }
  
  };
  



// post creation
      exports.postcreation = async(req,res)=> {

        
await Post.create({
    title:req.body.title,
     postedBy:await User.findOne({_id:req.params.id})
})
.then(suces=>{console.log(suces)})
.catch(err=>{console.log(err.message)})

          
        // if(!title||!body){

        //      return res.json({error:"please add all the fields"});

        // }
        
        res.send("ok")
        //  await User.findById(id)
        //  .then(user=>{
        //      console.log(user)
        //  })
        //  .then(post=>{
        // if (post) {
        //   res.send("You has been successfully posted");
        // }
        //  else {
        //  res.render("post not uploaded");
        //  }
        // })
    
    }
    exports.find=async(req,res)=>{
     await Post.find({name:'theone'}).populate("postedBy")
     .then(suces=>{console.log(suces)})
     .catch(err=>{console.log(err.message)})
    }