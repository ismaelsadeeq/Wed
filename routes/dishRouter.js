var express = require('express');
var router = express.Router();
const passport = require('passport')
const bodyParser = require('body-parser');


router.use(bodyParser.json());
const commentsController = require('../controllers/comment.controller')
const controller = require('../controllers/dishes.controller')

router.get('/:id', controller.getADishes);
router.get('/',controller.getAllDishes);
router.post('/post', passport.authenticate("jwt",{session:false}),controller.addDish);
router.put('/edit/:id',passport.authenticate("jwt",{session:false}),controller.editDish);
router.delete('/delete/:id',passport.authenticate("jwt",{session:false}), controller.deleteDish);

//dishes
router.delete('/:id/comments',passport.authenticate("jwt",{session:false}),commentsController.deleteComment);
router.get('/:id/comments',passport.authenticate("jwt",{session:false}),commentsController.getCommentOfADish);
router.get('/:id/comments/:commentId',passport.authenticate("jwt",{session:false}),commentsController.getACommentOfADish);
router.post('/:id/comments',passport.authenticate("jwt",{session:false}), commentsController.addComment);
router.put('/:id/comments/:commentId', passport.authenticate("jwt",{session:false}),commentsController.editComment);
router.delete('/:id/comments/:commentId',passport.authenticate("jwt",{session:false}), commentsController.deleteAComment);
module.exports = router;
