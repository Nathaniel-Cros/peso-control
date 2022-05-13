const { response } = require('express')
const {Users} = require('../../Models/users')
const bcrypt = require('bcryptjs')

const { returnError, returnSuccessInfo} = require('../../Functions')

const UpdateUser = async (req, res = response) => {
    try {
        const { uid } = req
        const {username, name, lastname, password, birthday, gender, height} = req.body

        const userFind = await Users.findByPk(uid)
        console.log( uid, username, name, lastname, password, birthday, gender, height, userFind )
        const validationPassword = bcrypt.compareSync( password, userFind.password )
        if( !validationPassword ) {
            const salt = bcrypt.genSaltSync()
            userFind.password = bcrypt.hashSync(password, salt)
        }

        userFind.username = username
        userFind.name = name
        userFind.lastname = lastname
        userFind.birthday = birthday
        userFind.gender = gender
        userFind.height = height

        userFind.save()

        const user = {...userFind?.dataValues}

        delete user.id
        delete user.password

        res.status(200).json(returnSuccessInfo('update user', {user}))
    } catch (e) {
        res.status(500).json(returnError('update user', e))
    }
}

module.exports = {
    UpdateUser
}
