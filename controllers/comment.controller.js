const mongoose =   require('mongoose');

const Dishes = require('../models/dishes');

async function getCommentOfADish (req,res){
  const dishId = req.params.id;
  const dish = await Dishes.findById(dishId);
  if (dish){
    res.setHeader('Content-Type', 'appliication/json');
    res.json(dish.comments);
    console.log(dish);
  }
  else {
    err = new Error('Dish' + dishId + 'doesnot exist')
    err.status = 400
    return err
  }
  
}
async function addComment(req,res){
  data = req.body;
  const dishId = req.params.id
  const dish = await Dishes.findById(dishId);
  if (dish){
    const comment = await dish.comments.push(data);
    await dish.save();
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(comment);
    console.log(comment);
  }  else {
    err = new Error('Dish' + dishId + 'doesnot exist')
    err.status = 400
    return err
  }
  
}
async function editComment(req,res){
  data = req.body;
  const dishId = req.params.id;
  const commentId = req.params.commentId;
  const dish = await Dishes.findById(dishId); 
  if (dish && dish.comments.id(commentId)){
    if (data.rating){
      dish.comments.id(commentId).rating = data.rating
    }
    if (data.comment){
      dish.comments.id(commentId).comment = data.comment
    };
    await dish.save();
    res.setHeader('Content-Type', 'application/json');
    res.json(dish.comments.id(commentId));
    console.log(dish.comments.id(commentId));
  } else if(!dish){
    err = new Error('Dish' + dishId + 'doesnot exist')
    err.status = 400
    return err
  }
  else {
    err = new Error('comment' + commentId + 'doesnot exist')
    err.status = 400
    return err
  }
}
async function deleteComment(req,res){
  const dishId = req.params.id
  const dish = await Dishes.findById(dishId)
  if (dish){
    for (var i = (dish.comments.length -1); i >= 0; i--){
      dish.comments.id(dish.comment[i]._id).remove();
    };
    await dish.save();
  
    res.statusCode = 200;
    res.setHeader('Content-Type', 'appliication/json');
    res.json(comment);
    console.log(comment);
  }  else {
    err = new Error('Dish' + dishId + 'doesnot exist')
    err.status = 400
    return err
  }
   
}
async function deleteAComment(req,res){
  const dishId = req.params.id
  const commentId = req.params.commentId
  const dish = await Dishes.findById(dishId)
  if (dish && dish.comments.id(commentId) ){
    dish.comments.id(commentId).remove();
    await dish.save();
    res.statusCode = 200;
    res.setHeader('Content-Type', 'appliication/json');
    res.json('deleted');
    console.log('deleted');
  }  else {
    err = new Error('Dish' + dishId + 'doesnot exist')
    err.status = 400
    return err
  }
   
}
async function getACommentOfADish(req,res){
  const dishId = req.params.id;
  const commentId = req.params.commentId
  const dish = await Dishes.findById(dishId);
  console.log(dish)
  if (dish !== null && dish.comments.id(commentId) !== null){
    console.log('hello')
    res.setHeader('Content-Type', 'appliication/json');
    res.json(dish.comments);
    console.log(dish.comments.id(commentId));
  } else if(!dish){
    err = new Error('Dish' + dishId + 'doesnot exist')
    err.status = 400
    return err
  } else {
    err = new Error('comment' + commentId + 'doesnot exist')
    err.status = 400
    return err
  }
}
module.exports = {
  getCommentOfADish,
  getACommentOfADish,
  addComment,
  editComment,
  deleteComment,
  deleteAComment
}