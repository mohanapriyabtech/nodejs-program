var mongoose = require("mongoose");
var bcrypt =require('bcrypt');
const User=require('../model/usercreate');
const jwt= require('jsonwebtoken');
const nodemailer=require('nodemailer');
const dotenv =require('dotenv');
const Post=require('../model/postcreate');
const Follow=require('../model/follow ')
const res = require("express/lib/response");
const req = require("express/lib/request");
const { optional } = require("joi");
const multer= require('multer')
const jsonwebtoken= require('jsonwebtoken')
const verifyToken=require('../middleware/middleware');
const decode = require("jsonwebtoken/decode");



   // signup user
     exports.signup = async(req,res)=>{ 
     
        const email = req.body.email;
        const fullname = req.body.fullname;
        const username = req.body.username;
        const password = req.body.password;
        const confirmpassword=req.body.confirmpassword;
        if(password == confirmpassword){
        console.log('password same')
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
            console.log(error.message);
            res.send(error.message)
        
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
      //  console.log(`${email}  and password is: ${password}`);
  
        await User.findOne({email:req.body.email})
         .then(user=>{   // result stored in user variable
         bcrypt.compare(password,user.password)
            if(user){
            
             console.log("login successfully")
             jsonwebtoken.sign({User},"secretkey",(err,token)=>{
              res.json({
                message:"login sucess",
                token:token
              });
             })

            } else{
                res.send("error");
                }
             })
        } catch(error){
        res.status(400).send("password not matching");
          }};






    // post creation
    exports.postcreation =async(req,res)=> {
        await Post.create({
        postname:req.body.postname,
        postcontent:req.body.postcontent,
        
        postedBy:await User.findOne({_id:req.params.userid},{"username":1,"email":1,"postname":1,"postcontent":1,"postedby":1,"followers":1,"following":1},{new:true})})
         .then(result=>{
          res.json({
            message:"post created sucessfully",
            result
          });
          
          console.log(result)
         User.find({
          postdetail: User.findOne({_id:req.params.userid},{new:true})})
        })
        
        .catch(err=>{console.log(err.message)})
      
    }

     //find the user by postname
    exports.find=async(req,res)=>{
        const userinfo=req.params.userid;
        await User.findByIdAndUpdate({_id:req.params.userid},{$set:{postdetail: await Post.find({postedBy:req.params.userid})}})
        await User.find({_id:req.params.userid},{"username":1,"email":1,"followers":1,"following":1}).populate('postdetail')
        
      .then(result=>{
      res.json({
        message:"user details here",
        result
      });console.log(result)})
     .catch(err=>{console.log(err.message)})
    }

    

   //count the likes
    exports.likes=async(req,res)=>{   
             
        const post1=await Post.findOne({_id:req.params.postid}) 

        if(req.params.userid==(post1.likedby)) {
          res.send('already liked')
          console.log("already liked")
         }else{
         const user=await User.findOne({_id:req.params.userid}) 
         const result= await Post.findOneAndUpdate({ _id: req.params.postid },{$set:{likedby:user},$inc:{likes:1}},{new: true })
        
       .then(result=>{res.json({
        message:"Like updated sucessfully",
        result
      });
         
        console.log("liked by :  "+user.username)
        
         }) 
         .catch(err=>{console.log(err.message)})
        }}


        // unlike the post
        exports.unlike=async(req,res)=>{   
             
          const post1=await Post.findOne({_id:req.params.postid}) 
  
          if(req.params.userid!=(post1.likedby)) {
            res.send('like not given')
            console.log("like not given")
           }else{
           const user=await User.findOne({_id:req.params.userid}) 
           const result= await Post.findOneAndUpdate({ _id: req.params.postid },{$unset:{likedby:user},$inc:{likes:-1}},{new: true })
          
         .then(result=>{res.json({
          message:"unlike updated sucessfully",
          result
        });
           
          console.log("unliked by :  "+user.username)
          
           }) 
           .catch(err=>{console.log(err.message)})
          }}




       // follow the user
    exports.follow=async(req,res)=>{     
        const userid=req.params.userid;
        const followid=req.params.followid;

        const followdetails =await User.findOne({_id:req.params.followid}) 
        const userdetails =await User.findOne({_id:req.params.userid}) 
        if(req.params.userid == followdetails.followers||req.params.followid == userdetails.following||req.params.userid==req.params.followid) {
          res.send('follow id already exist ')
          console.log("follow id already exist")

         }
         else 
      {
        
         await User.findByIdAndUpdate(req.params.userid,{ $push:{following:followid }},{new: true })
         await User.find({_id:req.params.userid},{"username":1,"email":1,"followers":1,"following":1},{new:true})
        
        .then(result=>{
          res.json({
            message:"followed sucessfully",
            result
          });
         
          
          console.log(result)})
      
        .catch(err=>{console.log(err.message)})

        await User.findByIdAndUpdate(req.params.followid,{ $push:{followers:userid } },{new: true })
        await User.find({_id:req.params.followid},{"username":1,"email":1,"followers":1,"following":1},{new:true})
          .then(result=>{
            res.json({
              message:"followed sucessfully",
              result
            });console.log(result)})
          .catch(err=>{console.log(err.message)})
    }
  }


   // unfollow the user
  exports.unfollow=async(req,res)=>{     
    const userid=req.params.userid;
    const followid=req.params.unfollowid;

    const followdetails =await User.findOne({_id:req.params.unfollowid}) 
    const userdetails =await User.findOne({_id:req.params.userid}) 
    
    if(req.params.userid==req.params.unfollowid) {
      res.send('invalid ')
      console.log("invalid")

     }
     else if(req.params.userid == followdetails.followers||req.params.unfollowid == userdetails.following)
    {
    
     await User.findByIdAndUpdate(req.params.unfollowid,{ $pull:{followers:userid}},{new: true })
    

      .then(result=>{
        console.log(result)})
      .catch(err=>{console.log(err.message)})
      
     const unfollow= await User.findByIdAndUpdate(req.params.userid,{ $pull:{following:followid }},{new: true })
      await User.find({_id:req.params.userid},{"username":1,"email":1,"followers":1,"following":1},{new:true})
    .then(result=> {  
      res.json({
        message:"unfollowed sucessfully",
        result
      });console.log(result)})
    .catch(err=>{console.log(err.message)})
     }else {
      res.send("This is not the valid id")
      }
  }

  // comment the post
  exports.comment= async(req,res)=> {
    
    const postname =req.params.postname;
    const user=req.params.userid;
    const userdetails=await User.findOne({_id:req.params.userid}) 
    await Post.create({
    comment:req.body.comment,
    commentby:await User.findOne({_id:req.params.userid},{new:true})})
   
    .then(result=>{
      res.json({
        message:"comment updated sucessfully",
        result 
      });
      console.log(result)
    
     console.log("commentby :"+userdetails.username)})
    
    .catch(err=>{console.log(err.message)})
  
  }

  // // upload image
  // exports.postimage= async(req,res)=> {
    
  //   const postimage =req.params.postimage;
  //   const user=req.params.userid;
  //   const userdetails=await User.findOne({_id:req.params.userid}) 
  //   await Post.create({
  //   postname:req.body.postname,
  //   postedBy:await User.findOne({_id:req.params.userid})})
    
  //   .then(suces=>{console.log(suces)
  //   res.send("image upload success")
  // console.log("postedBy :"+userdetails.username)})
    
  //   .catch(err=>{console.log(err.message)})
  
  // }

