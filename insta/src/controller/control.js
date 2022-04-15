var mongoose = require("mongoose");
var bcrypt =require('bcrypt');
const User=require('../model/schema');
const jwt= require('jsonwebtoken');
const nodemailer=require('nodemailer');
const dotenv =require('dotenv');




const res = require("express/lib/response");
const req = require("express/lib/request");
const { optional } = require("joi");


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

               
                // createdAt:Date.now(),
                // expiredAt:Date.now()+3600000,
                
        
            
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

    exports.otpverify = async(req,res)=>{ 
         
        
   const otp = await User.findOneAndUpdate({otp:req.params.otp},{$unset:{otp:req.params.otp}})
            
        if (req.params.otp == otp.otp) {
          res.send("You has been successfully registered");
        }
         else {
         res.render('otp', { msg: 'otp is incorrect' });
         }
     
   
        }
