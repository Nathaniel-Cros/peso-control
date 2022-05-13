const { Router } = require('express')
const { check } = require('express-validator')
const router = Router()

const { AddUser, DeleteUser, UpdateUser, GetUser, GetAllUsers} = require('../../Controllers/Users')

const { infoValidate, validateJWT } = require('../../Middlewares')

router.get('/all',[
    validateJWT
], GetAllUsers )

router.get('/',[
    validateJWT
], GetUser )

router.post('/', [
    check('email', 'Email invalid').isEmail(),
    check('email', 'Email is required').not().isEmpty(),
    check('username', 'Username is required').not().isEmpty(),
    check('name', 'Name is required').not().isEmpty(),
    check('lastname', 'Lastname is required').not().isEmpty(),
    check('password', 'Password is required').not().isEmpty(),
    check('password', 'Password minlength 6').isLength({ min: 6 }),
    check('gender', 'Gender is required').not().isEmpty(),
    check('birthday', 'Birthday is required').not().isEmpty(),
    check('birthday', 'Birthday is not a date').isDate(),
    check('height', 'Height is required').isDecimal(),
    infoValidate,
],AddUser )

router.put('/',[
    validateJWT,
    check('email', 'Email invalid').isEmail(),
    check('email', 'Email is required').not().isEmpty(),
    check('username', 'Username is required').not().isEmpty(),
    check('name', 'Name is required').not().isEmpty(),
    check('lastname', 'Lastname is required').not().isEmpty(),
    check('password', 'Password is required').not().isEmpty(),
    check('password', 'Password minlength 6').isLength({ min: 6 }),
    check('gender', 'Gender is required').not().isEmpty(),
    check('birthday', 'Birthday is required').not().isEmpty(),
    check('birthday', 'Birthday is not a date').isDate(),
    check('height', 'Height is required').isDecimal(),
    infoValidate,
], UpdateUser )

router.delete('/',[
    validateJWT
], DeleteUser )

module.exports = router
