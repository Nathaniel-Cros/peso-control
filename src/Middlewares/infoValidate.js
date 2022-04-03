const {validationResult} = require("express-validator");
const {returnError} = require("../functions/returnError");


const infoValidate = (req, res, next) => {
    const error = validationResult(req)
    //console.log("Error",error)
    if (!error.isEmpty()) {
        return res.status(400).json(returnError('add user', error))
    }
    next()
}

module.exports = {
    infoValidate
}
