const returnError = (section, error) => {
    console.error(`Error en section: ${section} \nError: ${error}`)
    return ({
        success: false,
        error: error,
    })
}

module.exports = {
    returnError
}
