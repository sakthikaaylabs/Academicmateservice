const { ObjectId } = require('bson')
const mongoose = require('mongoose')

const Schema = mongoose.Schema({
   userName: String,
   password:String,
   email:{
    type:String,
    unique:true,
   },
   academic:{
      type:Array
   },
   groups:[ObjectId],
   events:Array,
   chellanges:Array
  
})
const User = mongoose.model('users', Schema)

module.exports = User
