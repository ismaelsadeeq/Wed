var express = require('express');
const bodyParser = require('body-parser');
var router = express.Router();

const passport = require('passport');

router.use(bodyParser.json());

const controller = require('../controllers/user.controller')

/* GET users listing. */
router.post('/register',controller.register)
router.post('/login',passport.authenticate('local'),controller.login);
router.get('/logout',controller.logout);

module.exports = router;
