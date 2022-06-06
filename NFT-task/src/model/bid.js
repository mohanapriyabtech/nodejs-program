const mongoose=require('mongoose')

const bidschema=mongoose.Schema({
    nftname: { type:String,required:true,lowercase:true },
    description: { type:String,required:true,lowercase:true },
    nftimage:{data: Buffer, contentType: String },
    nftcollection:[{ type: String }],
    status:{ type:Boolean ,default:false},
    price :{ type:Number },
    issold :{ Boolean ,default:false},
    saletype:{ type: String, enum : ['Buy','Bid'], default: 'Bid' },
    bidstarttime:{type:Date},
    bidendtime:{type:Date},
    biddingtime:{type:Date,default:Date.now},
    biders:[{type:mongoose.Schema.Types.ObjectId,ref:'userdetails'}]
})
const bid=mongoose.model('bidding',bidschema)
module.exports=bid