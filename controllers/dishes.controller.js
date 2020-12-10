const mongoose =   require('mongoose');
const Dishes = require('../models/dishes');

async function getADishes(req,res){
  const dishId = req.params.id;
  const dish = await Dishes.findById(dishId);
  await Dishes.populate('comment.author')
  res.setHeader('Content-Type', 'application/json');
  res.json(dish);
  console.log(dish);
}
async function getAllDishes(req,res){
  const dish = await Dishes.find({});
  // await Dishes.populate('comment.author')
  res.setHeader('Content-Type', 'application/json');
  res.json(dish);
  console.log(dish);
}
async function addDish(req,res){
  data = req.body;
  const dish = await Dishes.create(data);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.json(dish);
  console.log(dish);
}
async function editDish(req,res){
  data = req.body;
  const dishId = req.params.id;
  const dish = await Dishes.findById(dishId);
  dish.name = data.name;
  dish.description = data.description;
  dish.image = data.image;
  dish.category = data.category; 
  dish.price = data.price;
  dish.label = data.label;
  dish.featured = data.featured;
  await dish.save();
  res.setHeader('Content-Type', 'application/json');
  res.json(dish);
  console.log(dish);
}
async function deleteDish(req,res){
  const dishId = req.params.id
  const dish = await Dishes.findByIdAndRemove(dishId)
  res.statusCode = 200;
  res.setHeader('Content-Type', 'appliication/json');
  res.json('all dishes deleted');
}
module.exports = {
  getADishes,
  getAllDishes,
  addDish,
  editDish,
  deleteDish,
}