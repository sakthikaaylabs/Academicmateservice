
const bcrypt = require('bcrypt')
const getController=require('./get')
const { groupCreation } = require('./post')
const postController=require('./post')
const putController=require('./put')

const controller = {
    login: postController.login,
    rigister: postController.rigister,
    forgot: putController.forgot,
    home: getController.home,
    event:getController.event,
    group: getController.group,
    acadamic: getController.acadamic,
    create: postController.create,
    challenges: postController.challenges,
    groupCreation:postController.groupCreation,
    eventCreation:postController.eventCreation,
    academicCreation:postController.academicCreation

}

module.exports = controller;