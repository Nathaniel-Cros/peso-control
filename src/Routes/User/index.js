const { Router } = require('express')
const { check } = require('express-validator')
const router = Router()

const { AddUser } = require('../../Controllers/Users/add')
const { DeleteUser } = require('../../Controllers/Users/delete')
const { UpdateUser } = require('../../Controllers/Users/update')
const { GetUser } = require('../../Controllers/Users/get')
const { GetAllUsers } = require('../../Controllers/Users/getAll')
const { infoValidate } = require('../../Middlewares/infoValidate')

router.get('/all', GetAllUsers )

router.get('/', GetUser )

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

router.put('/', UpdateUser )

router.delete('/', DeleteUser )

module.exports = router
