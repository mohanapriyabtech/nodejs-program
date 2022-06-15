const mongoose = require("mongoose");
const {ObjectId}=mongoose.Schema.Types;

const User = new mongoose.Schema({
   
  email: { type: String,required:true,unique:true, match :/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/},
  fullName:{ type: String, maxLength:20,lowercase :true, minLength:3 },
  userName:{ type: String,unique:true, maxLength:20, lowercase:true, minLength:3 },
  password:{ type: String, maxLength:20, lowercase :true, minLength:5 },
  otp:{ type:Number},
  taskDetails:[{ type: ObjectId ,ref:'tasks'}],
  
  
});


module.exports= mongoose.model('userdetails',User);