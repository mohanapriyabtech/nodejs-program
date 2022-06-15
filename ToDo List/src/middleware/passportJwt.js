const passport = require("passport");
const jwt = require("jsonwebtoken");
const JWTStrategy = require("passport-jwt").Strategy;
const ExtractJWT = require("passport-jwt").ExtractJwt;
const User=require('../model/userSchema');
require('dotenv').config()

const params = {
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
  secretOrKey:process.env.SECRET_KEY
};


let strategy = new JWTStrategy(params, function (token, done){
  console.log("In JWTStrategy", token)
    let user = User.find({id:token.id})
    .then(user=>{
    console.log("user",user);
    if(!user)
    return done(null, false ,{message :"Incorrect username or password"});
    else return done(null, user)
    })
  })


module.exports=(passport)=>passport.use(strategy)  


