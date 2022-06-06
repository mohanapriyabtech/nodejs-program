
const { number } = require("joi");
const mongoose =require("mongoose")

const {ObjectId}=mongoose.Schema.Types;

var Nft  = new mongoose.Schema ({

    nftname: { type:String,required:true,lowercase:true },
    description: { type:String,required:true,lowercase:true },
    nftimage:{data: Buffer, contentType: String },
    nftcollection:[{ type: String }],
    status:{ type:Boolean ,default:false},
    price :{ type:Number },
    issold :{ Boolean ,default:false},
    saletype:{ type: String, enum : ['Buy','Bid'], default: 'Buy' },

    createdAt:{ type:Date, default:Date.now } 
});
module.exports= mongoose.model('nfts',Nft);
