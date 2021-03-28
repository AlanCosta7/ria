const express = require("express")
const cors = require("cors")
const path = require('path')
const htmlpath = path.resolve(__dirname, 'dist', 'pwa')
const app = express()
app.use(cors())

app.use(express.static('dist/pwa'))

app.get('/*', (res, req) => {
  res.sendFile(htmlpath)
})
const port = process.env.PORT || 8080

app.listen(port)
