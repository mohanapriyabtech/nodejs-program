var mongoose = require("mongoose");

var bcrypt=require('bcrypt');


const userSchema = new mongoose.Schema({

      email: {
        type: String,required:true,unique:true, match :/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        
        
    },
    
    fullname: {
        type: String, maxLength:20, lowercase :true, minLength:3
    },
    username:{
        type: String,required:true, maxLength:20, lowercase:true, minLength:3
    },
    
    
    password:{
        type: String,unique:true, maxLength:20, lowercase :true, minLength:5
    },
    confirmpassword:{
        type:String, unique:true,maxLength:20, lowercase :true,minLength:5
    },
    createdAt:Date.now(),
    
    otp:{type:Number}
});


userSchema.pre('save',async function(next){
    try{
        const salt =await bcrypt.genSalt(10);
        const hashedpassword=await bcrypt.hash(this.password,salt)
        this.password=hashedpassword;
        const hashedpassword1=await bcrypt.hash(this.confirmpassword,salt)
        this.confirmpassword=hashedpassword1;
        next();
    }catch(error){
        next(error)
    }
})

module.exports= mongoose.model('userdetails',userSchema);
