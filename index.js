require('dotenv').config()

const express = require('express')
const morgan = require('morgan')
const app = express()

//settings
app.set('port', process.env.PORT || 4100)

// Middleware
app.use(morgan('dev'))

app.get('/', function (req, res) {
    try {
        res.status(200).send("Control Peso Backend")
    } catch (e) {
        console.error('Error in server', e)
        res.status(500).send({error: e})
    }
})

app.listen( app.get('port'), () => {
    console.log('listening on port ' + app.get('port'))
})
