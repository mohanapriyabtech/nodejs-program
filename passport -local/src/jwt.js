const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT =require('passport-jwt').ExtractJwt;

const {users,orders} = require("./data");


let app =express();
app.use(express.json());
// app.use(function (req,res,next){
//     res.header("Access-Control-Allow-Origin","*");
//     res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
//     next();
// });

app.use(passport.initialize());

const params = {
    jwtFromRequest : ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey : "jwtsecret23647832",
};
const jwtExpirySeconds = 300;

let strategyAll = new JWTStrategy(params, function (token, done) {
    console.log("In JWTStrategy",token);
    let user = users.find((u) => u.id === token.id)
    console.log("user",user);
    if(!user)
    return done(null, false ,{message :"Incorrect username or password"});
    else return done(null, user)
}); 
let strategyAdmin = new JWTStrategy(params, function (token, done) {
    console.log("In JWTStrategy",token);
    let user1 = users.find((u) => u.id === token.id)
    console.log("user",user1);
    if(!user1)
    return done(null, false ,{message :"Incorrect username or password"});
    else if(user1.role!=="admin")
    return done (null,false,{message:"you do not have admin role"});
    else return done(null, user1)
}); 
passport.use("roleAll",strategyAll);
passport.use("roleAdmin",strategyAdmin);


app.post("/user",function(req,res){
    let{username ,password }=req.body ;
    let user1 =users.find((u)=>u.username === username && u.password === password);
    if(user1){
        let payload ={id:user1.id};
        let token = jwt.sign(payload,params.secretOrKey, {
        algorithm : "HS256",
        expiresIn : jwtExpirySeconds,
    });
        res.send({ token :"bearer " + token});
     } else res.sendStatus(401);
});

app.get("/userdetail",passport.authenticate("roleAll",{session:false}),function(req,res){
    
    console.log("In GET/user",req.user);
     res.send(req.user);
    
});

app.get("/myorders",passport.authenticate("roleAll",{session:false}),function(req,res){
    console.log(req.user);
    let orders1 = orders.filter((ord)=> ord.userId === req.user.id);
    res.send(orders1);

});
app.get("/allOrders",passport.authenticate("roleAdmin",{session:false}),function(req,res){   // admin only others unauthorized
    console.log("In GET /allOrders",req.user);
    let orders1 = orders.filter((ord)=> ord.userId === req.user.id);
    res.send(orders1);

});


app.listen(2000,()=>console.log("server started on 2000"));

    
