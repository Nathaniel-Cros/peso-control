const { Router } = require('express')
const router = Router()

const { AddUser } = require('../../Controllers/Users/add')
const { DeleteUser } = require('../../Controllers/Users/delete')
const { UpdateUser } = require('../../Controllers/Users/update')
const { GetUser } = require('../../Controllers/Users/get')
const { GetAllUsers } = require('../../Controllers/Users/getAll')

router.get('/all', GetAllUsers )

router.get('/', GetUser )

router.post('/', AddUser )

router.put('/', UpdateUser )

router.delete('/', DeleteUser )

module.exports = router
