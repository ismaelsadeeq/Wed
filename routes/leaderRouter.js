var express = require('express');
var // error handlerreq
 router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.json());

const leadersController = require('../controllers/leader.controller')
router.get('/:id', leadersController.getSingleLeader);
router.get('/',leadersController.getAllLeaders);
router.post('/post', leadersController.addLeader);
router.put('/edit/:id', leadersController.editLeader);
router.delete('/delete/:id', leadersController.deleteLeader);

module.exports = router;