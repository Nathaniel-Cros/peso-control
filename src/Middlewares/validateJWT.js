const {response, request} = require('express')
const jwt = require('jsonwebtoken')

const {returnError} = require('../Functions')
const {Users} = require('../Models/users')


const validateJWT = async (req = request, res = response, next) => {
    try {
        const token = (req.header('x-token')).includes('bearer ') ?
            (req.header('x-token')).replace('bearer ', '')
            : ''
        //console.log("Error",error)
        if (token === '') {
            return res.status(401).json(returnError('Authorization Header', 'Error invalid token'))
        }

        const { uid } = jwt.verify(token, process.env.SECRETKEY)

        req.uid = atob(uid)

        const user = await Users.findByPk(req.uid)
        if( !user ) {
            return res.status(401).json(returnError('Middleware Authorization Header', 'Error user not exist'))
        }

        next()
    } catch (e) {
        return res.status(401).json(returnError('Middleware Authorization Header', 'Error invalid token'))
    }
}

module.exports = {
    validateJWT
}
