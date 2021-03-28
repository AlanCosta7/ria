const express = require("express")
const cors = require("cors")
const path = require('path')
const htmlpath = path.resolve(__dirname, 'dist', 'pwa')
serveStatic = require('serve-static')

const app = express()

// app.use(cors())

app.use('/', serveStatic(path.join(__dirname, '/dist/pwa')))

app.get('/*/', function (req, res) {
	res.sendFile(path.join(__dirname, '/dist/pwa/index.html'))
})

const port = process.env.PORT || 9000

app.listen(port)
