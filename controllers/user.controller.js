const passport = require('passport');
const user = require('../models/user');

async function register(req,res){
  data = req.body
  const User = await user.register(new user({username:data.username}), data.password) ;
  if (!User){
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.json({'status':'An error occured'})
  } else{
    passport.authenticate('local')(req,res,()=>{
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json({'success':true,'status':'registration successful'})
    })
  }
}

// async function login(req,res){
//   if(!req.session.user){
//     var authHeader = await req.headers.authorization;
//     if (!authHeader){
//       var err = new Error('you are not authenticated a');
//       res.setHeader('WWW-Authenticate','Basic');
//       err.status = 401;
//       console.log(err);
//       return next(err)
//     } 
//     var auth = new Buffer.from(authHeader.split(' ')[1],'base64').toString().split(':');
//     var username = auth[0];
//     var password = auth[1];
//     const User = await user.findOne({username:username})

//     if (User){
//       if(User.password != password){
//         var err = new Error('your password is incorrect');
//         res.setHeader('WWW-Authenticate','Basic');
//         err.status = 401;
//         return next(err)
//       } else{
//         if(User.username === username && User.password === password){
//           req.session.user ='authenticated';
//           res.statusCode = 200;
//           res.setHeader('Content-Type', 'application/json');
//           res.json({'status':'you are authenticated'} );
//         } else {
//           var err = new Error('you are not authenticated');
//           res.setHeader('WWW-Authenticate','Basic');
//           err.status = 401;
//           return next(err)
//         }
//       }
//     } else{
//       var err = new Error('User doenst exist');
//       res.setHeader('WWW-Authenticate','Basic');
//       err.status = 403;
//       return next(err)
//     }
//   } else{
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'application/json');
//     res.json({'message':'you are already authenticated'})
//   }
// };


async function login(req,res){
  res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json({'success':true,'status':'logged in successfully'})
}
async function logout(req,res){
  if(req.session){
    req.session.destroy();
    res.clearCookie('session-id');
    res.redirect('/');
  } else{
      var err = new Error('you are not logged in');
      res.setHeader('WWW-Authenticate','Basic');
      err.status = 403;
      return next(err)
  }
};

module.exports ={
  register,
  login,
  logout
}