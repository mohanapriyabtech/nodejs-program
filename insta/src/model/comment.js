var postSchema  = new Schema({
    title: {type:String},
    content: {type:String},
    user:{type:Schema.ObjectId},
    commentId:[{type:Schema.ObjectId, ref:'Comment'}],
    created:{type:Date, default:Date.now}
});


var commentSchema  = new Schema({
    content: {type:String},
    user: {type:Schema.ObjectId},
    post: {type:Schema.ObjectId, ref:'Post'},
    created:{type:Date, default:Date.now}
});