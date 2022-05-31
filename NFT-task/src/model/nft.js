
const { number } = require("joi");
const mongoose =require("mongoose")

const {ObjectId}=mongoose.Schema.Types;

var Nftdetail  = new mongoose.Schema ({

    nftname: { type:String,required:true,lowercase:true },
    description: { type:String,required:true,lowercase:true },
    nftimage:{data: Buffer, contentType: String },
    nftcollection:[{ type: String }],
    status:{ type:Boolean },
    price :{ type:Number },
    issold :{ Boolean },
    saletype:{ type: String, enum : ['user','admin'], default: 'user' },

    createdAt:{ type:Date, default:Date.now } 
});
module.exports= mongoose.model('nft',Nftdetail);
