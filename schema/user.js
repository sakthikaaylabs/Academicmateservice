const { ObjectId } = require('bson')
const mongoose = require('mongoose')

const Schema = mongoose.Schema({
   userName: String,
   password:String,
   email:{
    type:String,
    unique:true,
   }
  
})
const User = mongoose.model('user', Schema)

module.exports = User
