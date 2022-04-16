const mongoose = require("mongoose");

const {ObjectId}=mongoose.Schema.Types;



const postSchema = new mongoose.Schema({

    title: {
        type: String,required:true,
    },
    
    body: {
        type: String
    },

    photo:{
        type: String,default:"no photo",
    },
    
    
    postedBy:{
        type:ObjectId ,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
        ref:'userdetails'
    },
    
});



const Post= mongoose.model('postdetails',postSchema);
module.exports=Post