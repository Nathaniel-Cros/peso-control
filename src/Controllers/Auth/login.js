const { response } = require('express')
const bcrypt = require('bcryptjs')

const {returnSuccessInfo} = require('../../functions/returnSuccessInfo')
const {returnError} = require('../../functions/returnError')
const {generatedJWT} = require('../../functions/GeneratorJWT')
const {Users} = require("../../Models/users");

const Login = async (req, res = response) => {
    try {
        const {email, password} = req.body
        const userFind = await Users.findOne({
            where: {
                email
            }
        })
        if( !userFind ) {
            console.error("Error user not found")
            return res.status(400).json(returnError(false, "User Not Found"))
        }
        const validationPassword = bcrypt.compareSync( password, userFind.password )
        if( !validationPassword ) {
            console.error("Password incorrect")
            return res.status(401).json(returnError(false, "Incorrect password"))
        }
        const JWT = await generatedJWT(userFind.id)

        const user = {...userFind?.dataValues}

        console.log(delete user.id)
        console.log(delete user.password)

        res.status(200).json(returnSuccessInfo('Login', {
            token: JWT,
            type: 'Bearer',
            user,

        }))
    } catch (e) {
        console.error("Error in login ->", e)
        res.status(500).json(returnError(false, e))
    }
}


module.exports = {
    Login
}
