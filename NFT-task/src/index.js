const express =require("express");
const mongoose = require("mongoose");
const usercreate = require("./model/userschema");
const route = require("./router/userrouting");

const app= express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

mongoose.connect("mongodb://localhost/nftdb");
var db = mongoose.connection;

db.on('error',()=>console.log("error in connecting database"));
db.once('open',()=>console.log("conneted to database"));

app.use('/user',route)   //routing url
app.listen(8000,() => {
console.log("listening  on port 8000");

});


