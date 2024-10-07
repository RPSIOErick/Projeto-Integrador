// Imports
const { express, bodyParser } = require('../imports/imports')

// Express Instance
    const app = express()

    // Body Parser config
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json())

// End - Express Instance

// Module Export
module.exports = app