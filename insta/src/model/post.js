var mongoose = require("mongoose");




const postSchema = new mongoose.Schema({

    title: {
        type: String,required:true,
    },
    
    body: {
        type: String,required:true,
    },

    photo:{
        type: String,default:"no photo",
    },
    
    
    photoId:{
        type:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           ,
        ref: 
    },
    
});




module.exports= mongoose.model('postdetails',postSchema);