const mongoose=require('mongoose')

const {ObjectId}=mongoose.Schema.Types;

const Admin=mongoose.Schema({
    collectionname: {type:String,required:true,lowercase:true},
    creatorname:{type:String,required:true,lowercase:true},
    collectionimage:{data: Buffer, contentType: String},
    status:{type:Boolean ,enum :["pending","accept","reject"],default:"pending"},
    owner:[{type:mongoose.Schema.Types.ObjectId,ref:'Collection'}]

})

module.exports=mongoose.model('admindetails',Admin)