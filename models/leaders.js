const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const leadersSchema = new Schema({
  name:{
    type:String,
    required:true,
    unique:true
  },
  image:{
    type:String,
    required:true,
  },
  designation:{
    type:String,
  },
  abbr:{
    type:String,
  },
  description:{
    type:String,
    required:true,
  },
},{
  timestamps:true
});
var leaders  = mongoose.model('leaders',leadersSchema);

module.exports = leaders;