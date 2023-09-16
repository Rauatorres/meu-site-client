const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const path = require('path')

const buildPath = path.join(__dirname, 'build')

app.use(express.static(buildPath))
app.use(cors())
app.use(bodyParser.json())

app.get('*', (req, res)=>{
    res.sendFile(path.join(buildPath, 'index.html'))
})

require('./routes.js')(app)

module.exports = {app: app}