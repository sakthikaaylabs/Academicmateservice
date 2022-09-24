const { ObjectId } = require('bson')
const mongoose = require('mongoose')

const Schema = mongoose.Schema({
    academicName:{
        type:String,
        required:true
    },
    category:String,
    about:String,
    members:Array,
    activeType:String,
    location:String,
    post:Array,
})
const Academic = mongoose.model('academic', Schema)

module.exports = Academic
