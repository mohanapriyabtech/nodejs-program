const mongoose =require("mongoose")

const {ObjectId}=mongoose.Schema.Types;

var Collection  = new mongoose.Schema ({

    collectionname: {type:String,required:true,lowercase:true},
    creatorname:{type:String,required:true,lowercase:true},  
    creatordetails: [{type: ObjectId,ref:'userdetails', default:0}],                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
    collectionimage:{data: Buffer, contentType: String},
    status:{type:Boolean ,enum :["pending","accept","reject"],default:"pending"},
    createdAt:{type:Date, default:Date.now}
});

module.exports= mongoose.model('collections',Collection);


