var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var passport = require('passport');

const localConfig = require('./config/passport-local');

// var session = require('express-s// async function logout(req,res){
  //   if(req.session){
  //     req.session.destroy();
  //     res.clearCookie('session-id');
  //     res.redirect('/');
  //   } else{
  //       var err = new Error('you are not logged in');
  //       res.setHeader('WWW-Authenticate','Basic');
  //       err.status = 403;
  //       return next(err)
  //   }
//   // };ession');
// var FileStore = require('session-file-store')(session);

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var dishRouter = require('./routes/dishRouter')
var promoRouter = require('./routes/promoRouter');
var leaderRouter = require('./routes/leaderRouter')

const mongoose = require('mongoose');


const url = 'mongodb://localhost:27017/conFusion';
const connect = mongoose.connect(url);

connect.then((db)=>{
  console.log('connected to the server');
},(err)=> console.log(err))
var app = express();

require('./config/passport-jwt').jwtPassport();
app.use(passport.initialize());


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser(
//   '31354171'
// ));


// app.use(session({
//   name:'session-id',
//   secret:'',
//   saveUninitialized:false,
//   resave:false,
//   store:new FileStore()

// }))


// app.use(passport.session()); 
app.use('/', indexRouter);
app.use('/users', usersRouter);


// function auth(req,res,next){
//   console.log(req.user);
//   if(!req.user){
//       var err = new Error('you are not authenticated');
//       res.setHeader('WWW-Authenticate','Basic');
//       err.status = 401;
//       console.log(err);
//       return next(err);
//   } else {
//       next()
//     } 
  
// }

// app.use(auth);
app.use(express.static(path.join(__dirname, 'public')));

app.use('/dishes',dishRouter);
app.use('/leaders',leaderRouter);
app.use('/promotions',promoRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handlerreq
app.use(function(err, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
