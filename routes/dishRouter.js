var express = require('express');
var router = express.Router();
const controller = require('../controllers/dishes.controller')
router.get('/', controller.getDishes);
router.post('/post', controller.addDish);
router.put('/edit/:id', controller.addDish);
router.delete('/delete/:id', controller.addDish);

module.exports = router;
