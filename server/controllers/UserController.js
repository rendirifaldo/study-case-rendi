const {user} = require('../models')

class UserController {
    static async login(req,res,) {
        try {
            const { email, password } = req.body

            let searchEmail = await user.findOne({
                where: {email}
            })
            if(searchEmail){
                if(searchEmail.password === password){
                    res.status(200).json(searchEmail)
                } else {
                    res.status(400).json({
                        message: "Password is not valid"
                    })
                }
            } else {
                res.status(404).json({
                    message: "User not found!"
                })
            }
        } catch(err){
            res.status(500).json(err)
        }
    }

    static async register(req, res) {
        try {
            const{username, email, password, avatar, role}= req.body

            let result = await user.create({
                username, email, password, avatar, role
            })

            res.status(201).json(result)
        } catch(err) {
            res.status(500).json(err)
        }
    }

    static async getUsers(req, res) {
        try {
            let users = await user.findAll()

            res.status(200).json(users)

        } catch (err) {
            res.status(500).json(err)

        }

    }

    static async findById(req, res){
        try {
            const id = +req.params.id
            let resultUser = await user.findByPk(id)

            res.status(200).json(resultUser)
        } catch(err) {
            res.status(500).json(err)
            
        }


    }

    static async delete(req, res){
        try {
            const id = +req.params.id
            let result = await user.destroy({
                where: {id}
            })
            result === 1 ?
            res.status(200).json({
                message: `User id ${id} has been deleted!`
            }) :
            res.status(400).json({
                message: `User id ${id} not deleted!`
            })
        } catch (err) {
            res.status(500).json(err)
        }

    }

    static async update(req, res){
        try {
            const { username, email, password, avatar, role} = req.body
            const id = +req.params.id

            let result = await user.update({
                username, email, password, avatar, role

            },{
                where: { id }
            })

            result[0] === 1 ?
            res.status(201).json({
                message: `User id ${id} has been updated!`
            }) :
            res.status(400).json({
                message: `User id ${id} is not updated!`
            })
        } catch(err){
            res.status(500).json(err)
        }

    }
}

module.exports = UserController;