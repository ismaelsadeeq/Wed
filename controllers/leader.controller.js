const mongoose =   require('mongoose');

const Leader = require('../models/leaders');

async function getAllLeaders(req,res){
  const leader = await Leader.find({});
  res.setHeader('Content-Type', 'application/json');
  res.json(leader);
  console.log(leader);
}
async function getSingleLeader(req,res){
  const leaderId = req.params.id;
  const leader = await Leader.findById(leaderId);
  res.setHeader('Content-Type', 'application/json');
  res.json(leader);
  console.log(leader);
  
}
async function editLeader(req,res){
  data = req.body;
  const leaderId = req.params.id;
  const leader = await Leader.findById(leaderId);
  leader.name = data.name;
  leader.description = data.description;
  leader.image = data.image;
  leader.abbr = data.abbr;
  leader.designation = data.designation;
  await leader.save();
  res.setHeader('Content-Type', 'application/json');
  res.json(leader);
  console.log(leader);
}
async function addLeader(req,res){
  data = req.body;
  const leader = await Leader.create(data);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.json(leader);
  console.log(leader);
}
async function deleteLeader(req,res){
  const leaderId = req.params.id
  const leader = await Leader.findByIdAndRemove(leaderId)
  res.statusCode = 200;
  res.setHeader('Content-Type', 'appliication/json');
  res.json('all leaders deleted');
}

module.exports = {
  getAllLeaders,
  getSingleLeader,
  addLeader,
  editLeader,
  deleteLeader
}