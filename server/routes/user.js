const userRoute = require('express').Router()
const UserController = require('../controllers/UserController')

userRoute.post('/auth/login', UserController.login)
userRoute.post('/auth/register', UserController.register)

userRoute.get('/', UserController.getUsers)
userRoute.get('/information/:id', UserController.findById)
userRoute.delete('/delete/:id',UserController.delete)
userRoute.put('/update/:id', UserController.update)


module.exports = userRoute