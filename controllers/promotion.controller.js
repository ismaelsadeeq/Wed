const mongoose =   require('mongoose');

const Promotions = require('../models/promotions');

async function getAllPromotions(req,res){
  const promotion = await Promotions.find({});
  res.setHeader('Content-Type', 'application/json');
  res.json(promotion);
  console.log(promotion);
}
async function getSinglePromotion(req,res){
  const promotionId = req.params.id;
  const promotion = await Promotions.findById(promotionId);
  res.setHeader('Content-Type', 'application/json');
  res.json(promotion);
  console.log(promotion);
  
}
async function editPromotion(req,res){
  data = req.body;
  const promotionsId = req.params.id;
  const promotions = await Promotions.findById(promotionsId);
  promotions.name = data.name;
  promotions.description = data.description;
  promotions.image = data.image;
  promotions.price = data.price;
  promotions.label = data.label;
  await promotions.save();
  res.setHeader('Content-Type', 'application/json');
  res.json(promotions);
  console.log(promotions);
}
async function addPromotion(req,res){
  data = req.body; 
  const promotions = await Promotions.create(data);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.json(promotions);
  console.log(promotions);
}
async function deletePromotions(req,res){
  const promotionId = req.params.id
  const promotion = await Promotions.findByIdAndRemove(promotionId)
  res.statusCode = 200;
  res.setHeader('Content-Type', 'appliication/json');
  res.json('all promotions deleted');
}

module.exports = {
  getAllPromotions,
  getSinglePromotion,
  addPromotion,
  editPromotion,
  deletePromotions
}