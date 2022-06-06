const mongoose = require("mongoose");

const {ObjectId}=mongoose.Schema.Types;

const taskSchema = new mongoose.Schema({
    
   task:{ type: String,trim: true,lowercase :true, minLength:3},
   taskDescription: { type: String },
   status: { type:String,default:"pending" },
   tasksendBy:{ type: ObjectId ,ref:'userdetails'},
   createdAt:{type: Date, default: Date.now} ,
   UpdatedAt:{type :Date,default:new Date()},
   comment:[{type:String}],
   commentby:[{
       type: ObjectId ,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
       ref:'userdetails'
   }]
});

//taskSchema.set('timestamps',true);
module.exports= mongoose.model('tasks',taskSchema);
