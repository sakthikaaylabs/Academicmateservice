const mongoose = require('mongoose')
const User = require('../schema/user')
const bcrypt = require('bcrypt')
const getController=require('./get')
const postController=require('./post')
const putController=require('./put')

const controller = {
    login: postController.login,
    rigister: postController.rigister,
    forgot: putController.forgot,
    home: getController.home,
    group: getController.group,
    acadamic: getController.acadamic,
    create: postController.create,
    challenges: postController.challenges

}

module.exports = controller;