const Router = require('express')
const groupRouter = new Router()
const groupController = require('./groupController')


groupRouter.get('/', groupController.getGroups)

groupRouter.get('/:id', groupController.getOneGroup)



groupRouter.post('/create', groupController.createGroup)
groupRouter.post('/delete/:id', groupController.deleteGroup)

groupRouter.get('/news/:idGroup', groupController.getNews)



module.exports = groupRouter
