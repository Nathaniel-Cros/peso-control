const returnSuccessInfo = (section, data) => {
    console.log(`Send data the section: ${section} \nData: ${data}`)
    return ({
        success: true,
        data: data,
    })
}

module.exports = {
    returnSuccessInfo
}
