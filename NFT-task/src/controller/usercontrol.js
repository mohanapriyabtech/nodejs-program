var mongoose = require("mongoose");
var bcrypt =require('bcrypt');
const Userinfo=require('../model/userschema')
const jwt= require('jsonwebtoken');
const collection=require('../model/collection');
const nft=require('../model/nft')
const multer= require('multer')


    // signup user
     exports.signup = async(req,res)=>{ 
 
      try{
        const name = req.body.name;
        const walletaddress = req.body.walletaddress;
        const email= req.body.email;
        const profilephoto = req.body.profilephoto;
        const status = req.body.status;
        if(req.body.role=="admin"){
          const user =await Userinfo.create({name,walletaddress,email,profilephoto,status,role:"admin"})
          res.send(user);   
        }else{
         const user= await Userinfo.create({name,walletaddress,email,profilephoto,status})  
         console.log(" register completed")    
         res.send(user);  
       
      }}catch(error){
            console.log(error);
            res.send(error.message)
      }
    }

/* admin already exist means message displayed*/
    exports.admin=async(req,res)=>{
     
     const admin=await Userinfo.findOne({role:"admin"})
     if(admin){
      res.send("admin account already exists")
      }else{
        Userinfo.create({
       name: "vidhun",
       walletaddress: "vidhun123",
       email: "vidhun@gmail.com",
       role: "admin"
       })
        .then(result=>{
           res.send(result);
           console.log("admin registered")
        }).catch(err=>{
        res.send(err.message)
        })
      }
      
       }

     
          
          
        
      


    // login user
    exports.login=async(req,res)=>{
      const walletaddress = req.body.walletaddress;
      const role =req.body.role;
        if(role=="admin")
        {
        await Userinfo.findOne({walletaddress:walletaddress},{role:role})
        .then(user=>{ 
          if(user){
          // result stored in user variable        
          console.log("login successfully")
          const token = jwt.sign({
            walletaddress:user.walletaddress
        },"secretkey");
        
        return res.status(200).json({
            message : "Auth Successful",
            token
        })
      }})
        .catch(errors=>{res.send('not a user')
         console.log('not a user')
        })
      }else{
        const walletaddress = req.body.walletaddress;
        await Userinfo.findOne({walletaddress:walletaddress})
        .then(user=>{ 
          if(user){
          // result stored in user variable        
          console.log("login successfully")
          const token = jwt.sign({
            walletaddress:user.walletaddress
        },"secretkey");
        
        return res.status(200).json({
            message : "Auth Successful",
            token
        })
      }})
        .catch(errors=>{res.send('not a user')
         console.log('not a user')
        })

      }
       }
      
    exports.updateuser = async(req,res)=>{
        try{
        const user= await Userinfo.Update({id:req.params.userid},{$set:req.body},{new:true})
        console.log(" User Details Updated")    
        res.send(user);  
       
        }catch(error){
         console.log(error.message);
         res.send(error.message)
        }
    }

    exports.deleteuser = async(req,res)=>{
    
      await Userinfo.findOneAndDelete({_id:req.params.userid},{new:true})
      .then((result)=>{res.send("user deleted successfully");
        console.log("user deleted successfully");
       })
        .catch((errors)=>{res.send(errors.message)}); 
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

