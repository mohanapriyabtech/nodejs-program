const mongoose = require("mongoose");

const {ObjectId}=mongoose.Schema.Types;



const followSchema = new mongoose.Schema({

    followers: [{
        type: ObjectId ,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
        ref:'userdetails',
        default:0,
        unique:true
    }],
    following: [{
        type: ObjectId ,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
        ref:'userdetails',
        default:0,
        unique:true
    }]
    
    
    
    
});



const Follow= mongoose.model('followdetails',followSchema);
module.exports= Follow ;