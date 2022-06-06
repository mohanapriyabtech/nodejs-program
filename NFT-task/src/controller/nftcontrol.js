const express=require('express')
const app=express();
const nft=require('../models/nftschema')
const collection=require('../models/collectionschema')

//create nft
exports.create=async(req,res)=>{
  
  const collection=await collection.findOne({name:req.body.nftCollection})
  console.log(req.file)
  await nftschema.create({
    name:req.body.name,
    description:req.body.name,
    nftImage:req.file,
    nftCollection:collection,
    status:req.body.status,
    price:req.body.price,
    isSold:req.body.isSold
})
        .then(result=>{
            console.log(result);
            res.send(result)
        })
        .catch(err=>{console.log(err.message)
            res.send(err.message)})}
  //get nfts
  exports.find=async(req,res,next) => {
      const collection=await collectin.findById({_id:req.params.id})
    await nft.find({nftCollection:collection})
    .then(user => {console.log(user),
    res.send(user)})
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error : err
        })
  
    });
  
  
  }
 
//update nft
exports.update=async(req,res)=>{
    const id = req.params.id
    await nft.findOneAndUpdate({_id:id},{$set:req.body} )
    .then(result=>{res.send(result)})
    .catch(error=>{res.send(error.message)})
}
//delete nft
exports.delete=async(req,res)=>{
    const id = req.params.id
    await nft.deleteOne({id:id} )
    .then(result=>{res.send(result)})
    .catch(error=>{res.send(error.message)})

}