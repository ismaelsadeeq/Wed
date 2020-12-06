var express = require('express');
const bodyParser = require('body-parser');
var router = express.Router();

const passport = require('passport');

router.use(bodyParser.json());

const controller = require('../controllers/user.controller')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/register',controller.register)
router.post('/login',passport.authenticate('local'),controller.login);
router.get('/logout',controller.logout);

module.exports = router;
