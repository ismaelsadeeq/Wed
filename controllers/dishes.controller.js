const mongoose =   require('mongoose');

const Dishes = require('../models/dishes');

async function getDishes(req,res){
  const dishId = req.params.id;
  const dish = Dishes.findById(dishId);
  res.setHeader('Content-Type', 'appliication/json');
  res.json(dish);
  console.log(dish);
}
async function addDish(req,res){
  data = req.body;
  const dish = await Dishes.create(data);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'appliication/json');
  res.json(dish);
  console.log(dish);
}
async function editDish(req,res){
  data = req.body;
  const dishId = req.params.id;
  const dish = Dishes.findByIdAndUpdate(dishId,{
    set:data,
    new:true
  });
  res.setHeader('Content-Type', 'appliication/json');
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
  getDishes,
  addDish,
  editDish,
  deleteDish
}