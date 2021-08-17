const Router = require('express')
const authRouter = new Router()
const {check} = require("express-validator")
const roleMiddleware = require('./middlewaree/roleMiddleware')
const authController = require('./authController')


authRouter.post('/registration', [
    check('username', "Имя пользователя не может быть пустым").notEmpty(),
    check('password', "Пароль должен быть больше 4 и меньше 10 символов").isLength({min:4, max:10})
], authController.registration)
authRouter.post('/login', authController.login)
authRouter.get('/users', roleMiddleware(["ADMIN"]), authController.getUsers)


module.exports = authRouter
