var passport = require('passport');
var User = require('../models/user');
var JwtStrategy = require('passport-jwt').Strategy;
var ExtractJwt = require('passport-jwt').ExtractJwt;

var jwt =  require('jsonwebtoken');

var key = require('../key');
function getToken(user){
  return jwt.sign(user, key.secretKey
  );
}

var options = {};
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();

options.secretOrKey = key.secretKey;
function jwtPassport(){
  passport.use(new JwtStrategy(options,
    (jwt_payload,done)=> {
      console.log('jwt',jwt_payload);
      User.findOne({_id:jwt_payload._id},(err,user)=>{
        if(err){
          return done(err,false);
        } else if(user){
          console.log(user);
          return done(null,user);
        } else {
          return done(null,false)
        }
      })
  }))
}   

function verifyUser(){ 
  passport.authenticate('jwt',{session:false});
}
module.exports = {
  getToken,
  jwtPassport,
  verifyUser
}
