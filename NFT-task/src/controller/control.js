var mongoose = require("mongoose");
var bcrypt =require('bcrypt');
const User=require('../model/userschema')
const jwt= require('jsonwebtoken');

const Post=require('../model/collection');
const Follow=require('../model/nft')

const multer= require('multer')
const jsonwebtoken= require('jsonwebtoken')
const verifyToken=require('../middleware/middleware');



   // signup user
     exports.signup = async(req,res)=>{ 

      try{
     
        const name = req.body.email;
        const walletaddress = req.body.walletaddress;
        const email= req.body.email;
        const profilephoto = req.body.profilephoto;
        const status = req.body.status;
        
        const user= await User.create({name,walletaddress,email,profilephoto,status})  
        console.log(" register completed")    
        res.send(user);  
       
        }catch(error){
            console.log(error);
            res.send(error.message)
        
        }
    }

    // login user
    exports.login=async(req,res)=>{
      try {
  
       var walletaddress = req.body.walletaddress;
  
        await User.findOne({email:req.body.email})
         .then(user=>{   // result stored in user variable
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

    exports.updateuser = async(req,res)=>{ 
     
        const name = req.body.email;
        const walletaddress = req.body.walletaddress;
        const email= req.body.email;
        const password = req.body.password;
        const profilephoto = req.body.profilephoto;
        const status = req.body.status;
                 
        try{
        const user= await User.findOneAndUpdate({_id:req.params.userid},{$set:req.body},{new:true})
        console.log(" register completed")    
        res.send(user);  
       
        }catch(error){
            console.log(error.message);
            res.send(error.message)
        
        }
    }





    // post creation
    exports.createcollection =async(req,res)=> {
        await User.create({
        postname:req.body.postname,
        postcontent:req.body.postcontent,
        
        postedBy:await User.findOne({_id:req.params.userid},{"username":1,"email":1,"postname":1,"postcontent":1,"postedby":1,"followers":1,"following":1},{new:true})})
         .then(result=>{
          res.json({
            message:"collection created sucessfully",
            result
          });
          
          console.log(result)
         User.find({
          postdetail: User.findOne({_id:req.params.userid},{new:true})})
        })
        
        .catch(err=>{console.log(err.message)})
      
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

