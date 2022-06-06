const express =require("express");
const mongoose = require("mongoose");
const userschema= require("./model/userschema");
const userroute = require("./route/userroute");
const taskroute = require("./route/taskroute");

const app= express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));


mongoose.connect("mongodb://localhost/ToDodb");
var db = mongoose.connection;
db.on('error',()=>console.log("error in connecting database"));
db.once('open',()=>console.log("conneted to database"));

app.use('/user', userroute)   //routing url
app.use('/task',taskroute)

app.use((req, res, next) => {
    const error =new Error("page not found"); 
    error.status = 404;
    next(error);
});
app.use((error, req, res, next) => {     //error msg found if the url is wrong
    res.status(error.status||500);
    res.json({
        error: {
            message: error.message
        }
    });
});

app.listen(8000,() =>{
console.log("listening  on port 8000");
});

