const { Router } = require('express')
const { check } = require('express-validator')
const router = Router()

const { Login } = require('../../Controllers/Auth/login')

router.post('/login', [
    check('email', 'Email required').not().isEmpty(),
    check('email', "Invalid email").isEmail(),
    check('password', "Password required").not().isEmpty(),
],Login)

module.exports = router
