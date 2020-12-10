var express = require('express');
var router = express.Router();
const passport = require('passport')
const bodyParser = require('body-parser');
router.use(bodyParser.json());

const promotionsController = require('../controllers/promotion.controller')
router.get('/:id', promotionsController.getSinglePromotion);
router.get('/',promotionsController.getAllPromotions);
router.post('/post',passport.authenticate("jwt",{session:false}), promotionsController.addPromotion);
router.put('/edit/:id',passport.authenticate("jwt",{session:false}),promotionsController.editPromotion);
router.delete('/delete/:id',passport.authenticate("jwt",{session:false}), promotionsController.deletePromotions);

module.exports = router;