var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.json());

const promotionsController = require('../controllers/promotion.controller')
router.get('/:id', promotionsController.getSinglePromotion);
router.get('/',promotionsController.getAllPromotions);
router.post('/post', promotionsController.addPromotion);
router.put('/edit/:id', promotionsController.editPromotion);
router.delete('/delete/:id', promotionsController.deletePromotions);

module.exports = router;