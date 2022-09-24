const { ObjectId } = require('bson')
const mongoose = require('mongoose')

const Schema = mongoose.Schema({
    eventName:{
        type:String,
        required:true
    },
    description:String,
    eventType:String,
    eventStartAt:Date,
    eventEndAt:Date,
    members:Array,
    activeStatus:String,
    location:String,
    memberLimit:Number,
})
const Event = mongoose.model('event', Schema)

module.exports = Event
