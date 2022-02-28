const {user} = require('../models')

class UserController {
    static login(req,res,) {

    }

    static async register(req, res) {

    }

    static getUsers(req, res) {
        try{
            let users = await user.findAll()

            res.status(200).json(users)

        } catch(err) {
            res.status(500).json(err)
            
        }

    }

    static async findById(req, res){

    }

    static async delete(req, res){

    }

    static async update(req, res){

    }
}

module.exports = UserController;