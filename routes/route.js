const route=require('express').Router()
const controller=require('../controller')


route.post("/login",controller.login)
route.post("/register",controller.rigister)
route.put('/forgot',controller.forgot)
route.get('/home',controller.home)
route.get('/group',controller.group)
route.post('/group/create',controller.groupCreation)
route.get('/acadamic',controller.acadamic)
route.get('/event',controller.event)
route.post('/academic/create',controller.academicCreation)
route.post('/event/create',controller.eventCreation)
route.post('/chellanges',controller.challenges)

module.exports=route;