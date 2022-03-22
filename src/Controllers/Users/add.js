const { response } = require('express')
const { validationResult } = require('express-validator')
const bcrypt = require('bcryptjs')

const {returnSuccessInfo} = require('../../functions/returnSuccessInfo')
const {returnError} = require('../../functions/returnError')
const {Users} = require("../../Models/users");


const AddUser = async (req, res = response) => {
    try {
        const error = validationResult(req)
        console.log("Error",error)
        if (!error.isEmpty()) {
            return res.status(400).json(returnError('add user', error))
        }
        const { body } = req

        const emailExist = await Users.findOne({
            where: {
                email: body.email
            }
        })

        if (emailExist) {
            return res.status(400).json(returnError("new user", { msg: "Email is exists in db" }))
        }

        const { username, name, lastname, email, password, birthday, gender, height } = body
        const user = new Users({ username, name, lastname, email, password, birthday, gender, height })

        const salt = bcrypt.genSaltSync()
        user.password = bcrypt.hashSync(password, salt)

        await user.save()

        res.status(201).json(returnSuccessInfo('new user', user))
    } catch (e) {
        res.status(500).json(returnError('new user', e))
    }
}

module.exports = {
    AddUser
}
