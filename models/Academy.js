const mongoose = require("mongoose");


const AcademySchema = new mongoose.Schema({
    acadmyName: {
        type: 'string',
        required: true,
        min: 5,
        max: 50,
        unique: true,
    },
    acadmyId: {
        type: 'string',
        required: true,
        min: 5,
        max: 50,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        max: 50,
        unique: true
    },
    password: {
        type: String,
        required: true,
        min: 8,
        max: 15,
    },
    profilePicture: {
        type: String,
        default: "",
    },
    coverPicture: {
        type: String,
        default: "",
    },
    followers: {
    type: Array,
    default: "",
    },
    followings: {
    type: Array,
    default: ""
    },
},
{ timestamps: true }
);

module.exports = mongoose.model("Academy", AcademySchema);