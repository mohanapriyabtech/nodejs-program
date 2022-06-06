var mongoose = require("mongoose");
var bcrypt =require('bcrypt');
const Userinfo=require('../model/userschema')
const jwt= require('jsonwebtoken');
const collection=require('../model/collection');
const nft=require('../model/nft')
const multer= require('multer')
const jsonwebtoken= require('jsonwebtoken')
const verifyToken=require('../middleware/middleware')
const Userinfo=require('../model/userschema')
const Admin=require('../model/admin')


  // post creation
  exports.createcollection =async(req,res)=> {

    const user=await Userinfo.findOneAndUpdate({_id:req.params.userid},{$set:{creatorname:user.name}},{new:true})  
    await Admin.create({
    collectionname:req.body.collectionname,
    collectionimage:req.body.collectionimage,
    creatorname:req.body.creatorname,
    creatordetails:await Userinfo.findOne({_id:req.params.userid},{new:true})
    })
   
     .then(result=>{
       res.json({
        message:"collection created sucessfully",
        result
       });
      
      console.log(result);
      })
    .catch(err=>{console.log(err.message)})
  
}

 // collection creation
//  exports.createcollection =async(req,res)=> {

//     const user=await Userinfo.findOneAndUpdate({_id:req.params.userid},{$set:{creatorname:user.name}},{new:true})
//       await collection.create({
//       collectionname:req.body.collectionname,
//       collectionimage:req.body.collectionimage,
//       status:req.body.status,
//       creatordetails:await Userinfo.findOne({_id:req.params.userid},{new:true})
//       })
//         .then(result=>{
//          res.json({
//           message:"collection created sucessfully",
//           result
//          });
        
//         console.log(result);
//         })
      
//       //   User.find({
//       //   postdetail: User.findOne({_id:req.params.userid},{new:true})})
//       // })
      
//       .catch(err=>{console.log(err.message)})
    
//   }


exports.get = async(req,res) => {
    await collection.find({id:req.body.id})
    .then(result => {
    res.send(result)
     console.log(result)
    })
    .catch(error => {
        res.send(error.message)
    })
}

//update collection
exports.update = async(req,res)=>{
    
    await collection.findOneAndUpdate({_id:req.params.id},{$set:req.body})
    .then(result=>{res.send(result)})
    .catch(error=>{res.send(error.message)})
}
//delete collection
exports.delete = async(req,res)=>{
    
   await collection.findOneAndDelete({id:req.params.id})
     .then(results=>{res.send(results)})
     .catch(error=>{res.send(error.message)})

} 