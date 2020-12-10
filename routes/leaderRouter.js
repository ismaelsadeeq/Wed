var express = require('express');
const passport = require('passport')
 router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.json());

const leadersController = require('../controllers/leader.controller')
router.get('/:id', leadersController.getSingleLeader);
router.get('/',leadersController.getAllLeaders);
router.post('/post',passport.authenticate("jwt",{session:false}),leadersController.addLeader);
router.put('/edit/:id', passport.authenticate("jwt",{session:false}),leadersController.editLeader);
router.delete('/delete/:id',passport.authenticate("jwt",{session:false}), leadersController.deleteLeader);

module.exports = router;