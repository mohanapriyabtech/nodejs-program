const mongoose = require("mongoose");

const {ObjectId}=mongoose.Schema.Types;




const postSchema = new mongoose.Schema({
    

    postname: {
        type: String,
    },
    
    postcontent: {
        type: String
    },

    photo:{
        type: String,default:"no photo",
    },   
    postedBy:{
        type: ObjectId ,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
        ref:'userdetails'
        
    },
    likes:{type : Number ,default:0},
    likedby:[{
        type: ObjectId ,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
        ref:'userdetails',
        default:0               // this is imp otherwise null cant read
    }],
    
    
    
    create: {type: Date, default: Date.now} ,

    comment:{type:String},
    commentby:[{
        type: ObjectId ,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
        ref:'userdetails',
        default:0
    }],
    
});



const Post= mongoose.model('postdetails',postSchema);
module.exports=Post
