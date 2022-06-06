const express=require('express')
const nft=require('../model/nft')
const bid=require('../model/bid')
const collection=require('../model/collection')
const user=require('../model/user')


exports.bidding=async(req,res)=>{
   const nftdetail= await nft.findOne({_id:req.params.id})
    await bid.create({
        name:nftdetail.name,
        description:nftdetail.description,
        nftImage:nftdetail.nftImage,
        nftCollection:nftdetail.nftCollection,
        status:true,
        price:req.body.price,
        starttime:req.body.startingtime,
        issold:false,
        endtime:req.body.endingtime
        })
    .then(result=>{console.log(result);
        res.send(result)
    })
    .catch(error=>{console.log(error.message)
        res.send(error.message)
    })

}

exports.biding=async(req,res)=>{
  const data=await userschema.findById({_id:req.params.id1})
  const data1=await bidschema.find(req.params.id)
  const data3=await collectionschema.find({owner:req.body.id1})
  if(data1.bidingtime === data1.endingtime) {
    const data2=await bidschema.findByIdAndUpdate({_id:req.params.id},{issold:true})
  if(data2.issold === true) {
    await nft.create({
    name:req.body.name,
    description:data1.name,
    nftImage:data1.nftImage,
    nftCollection:data3,
    status:true,
    price:data1.price
    })
}
}
else{
if(data1.startingtime>=req.body.bidingtime){
if(data1.endingtime<req.body.bidingtime){
if(data1.price<req.body.price){
await bidschema.updateOne({biders:data},{price:req.body.price})


    .then(result=>{
        console.log(result);
        res.send(result)
    })
    .catch(err=>{console.log(err.message)
        res.send(err.message)})
    }
    else{
        res.send('invalid bid amound')
        .catch(err=>{console.log(err.message)
            res.send(err.message)})
    }
}else{
    res.send('bid has ended')
    .catch(err=>{console.log(err.message)
        res.send(err.message)})
}
  
}else{
    res.send('bid has not started')
    .catch(err=>{console.log(err.message)
        res.send(err.message)})
}
}}