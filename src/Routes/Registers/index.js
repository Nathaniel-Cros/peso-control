const { Router } = require('express')
const { check } = require('express-validator')
const router = Router()

const { AddHistory, DeleteHistory, UpdateHistory, GetHistory, GetAllHistories } = require('../../Controllers/Register')

const { infoValidate, validateJWT } = require('../../middlewares')

router.get('/',[
    validateJWT
], GetAllHistories )

router.get('/:id',[
    validateJWT
], GetHistory )

// weight, hasCalories, calories, hasWater, litersWater

router.post('/', [
    validateJWT,
    check('weight', 'Weight is required').isDecimal(),
    check('hasCalories', 'Has Calories is required').isBoolean(),
    check('calories', 'Calories is required').isDecimal(),
    check('hasWater', 'Has Water is required').isBoolean(),
    check('litersWater', 'Liters Water is required').isDecimal(),
    infoValidate,
], AddHistory )

router.put('/:id',[
    validateJWT,
    check('weight', 'Weight is required').isDecimal(),
    check('hasCalories', 'Has Calories is required').isBoolean(),
    check('calories', 'Calories is required').isDecimal(),
    check('hasWater', 'Has Water is required').isBoolean(),
    check('litersWater', 'Liters Water is required').isDecimal(),
    infoValidate,
], UpdateHistory )

router.delete('/:id',[
    validateJWT
], DeleteHistory )

module.exports = router
