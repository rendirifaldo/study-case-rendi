const userRoute = require('express').Router()
const userController = require('../controllers/UserController')

userRoute.post('/auth/login', userController.login)
userRoute.post('/auth/register', userController.register)

userRoute.get('/', UserController.getUsers)
userRoute.get('/information/:id', UserController.findById)
userRoute.delete('/delete/:id',UserController.delete)
userRoute.put('/update/:id', UserController.update)


module.exports = userRoute