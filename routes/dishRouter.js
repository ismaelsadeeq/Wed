var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.json());

const commentsController = require('../controllers/comment.controller')
const controller = require('../controllers/dishes.controller')
router.get('/:id', controller.getADishes);
router.get('/',controller.getAllDishes);
router.post('/post', controller.addDish);
router.put('/edit/:id', controller.editDish);
router.delete('/delete/:id', controller.deleteDish);

//dishes
router.delete('/:id/comments', commentsController.deleteComment);
router.get('/:id/comments',commentsController.getCommentOfADish);
router.get('/:id/comments/:commentId',commentsController.getACommentOfADish);
router.post('/:id/comments', commentsController.addComment);
router.put('/:id/comments/:commentId', commentsController.editComment);
router.delete('/:id/comments/:commentId', commentsController.deleteAComment);
module.exports = router;
