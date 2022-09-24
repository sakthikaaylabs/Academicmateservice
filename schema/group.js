const { ObjectId } = require('bson')
const mongoose = require('mongoose')

const Schema = mongoose.Schema({
    groupName:{
        type:String,
        required:true
    },
    description:String,
    members:Array,
    activeStatus:String,
    location:String
})
const Group = mongoose.model('group', Schema)

module.exports = Group
