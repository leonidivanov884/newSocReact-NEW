const Router = require('express')
const newsRouter = new Router()
const newsController = require('./newsController')


newsRouter.get('/', newsController.getNews)
newsRouter.get('/:id', newsController.getOneNews)

newsRouter.post('/create', newsController.createNews)
newsRouter.post('/delete/:id', newsController.deleteNews)


module.exports = newsRouter
