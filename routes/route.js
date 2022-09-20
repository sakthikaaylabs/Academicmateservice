const route=require('express').Router()
const controller=require('../controller')


route.post("/login",controller.login)
route.post("/register",controller.rigister)
route.put('/forgot',controller.forgot)
route.get('/home',controller.home)
route.get('/group',controller.group)
route.get('/acadamic',controller.acadamic)
route.post('/create',controller.create)
route.post('/chellanges',controller.challenges)
// route.put('/forgot',controller.forgot)
// route.put('/forgot',controller.forgot)
// route.put('/forgot',controller.forgot)
// route.put('/forgot',controller.forgot)
// route.put('/forgot',controller.forgot)
// route.put('/forgot',controller.forgot)

module.exports=route;