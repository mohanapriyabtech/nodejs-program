const mongoose = require("mongoose");
//const Post =require("./postcreate")

var bcrypt=require('bcrypt');
const {ObjectId}=mongoose.Schema.Types;


const User = new mongoose.Schema ({
    
    name: { type: String, maxLength:20, lowercase :true, minLength:3 ,required:true},
    walletaddress:{ type:String, unique:true , required:true, lowercase:true },
    email: { type: String, required:true, match :/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ },
    password:{ type: String ,lowercase :true, minLength:5 },
    profilephoto:{type:String, contentType: String},
    status:{ type: Boolean ,Default:false , required:true},
    roles: {type: [{ type: String, enum: ['user', 'admin']}], default: ['user'] },
    updatedAt: {type: Date },
    createdAt: { type: Date, default: Date.now },
});


// User.pre('save',async function(next) {
//     try{
//         const salt =await bcrypt.genSalt(10);
//         const hashedpassword=await bcrypt.hash(this.password,salt)
//         this.password=hashedpassword;
//         const hashedpassword1=await bcrypt.hash(this.confirmpassword,salt)
//         this.confirmpassword=hashedpassword1;
//         next();
//     }catch(error){
//         next(error)
//     }
//})
module.exports= mongoose.model('userdetails',User);