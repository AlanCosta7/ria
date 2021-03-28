const express = require("express")
const cors = require("cors")
//const path = require('path')
// const htmlpath = path.resolve('dist/pwa')
const app = express()
app.use(cors())

app.use(express.static('dist/pwa'))

app.get('/*', (req, res) => {
  res.sendFile('dist/pwa/index.html')
})
const port = process.env.PORT || 9000

app.listen(port)
