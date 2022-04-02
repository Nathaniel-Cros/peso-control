const { response } = require('express')
//const { validationResult } = require('express-validator')
//const bcrypt = require('bcryptjs')

const {returnSuccessInfo} = require('../../functions/returnSuccessInfo')
const {returnError} = require('../../functions/returnError')

const Login = (req, res = response) => {
    try {
        res.status(200).json(returnSuccessInfo('Login', {token: 'ssjdncnrj4349349348rekjejfjddfjdfjdf'}))
    } catch (e) {
        console.error("Error in login ->", e)
        res.status(500).json(returnError(false, e))
    }
}


module.exports = {
    Login
}
