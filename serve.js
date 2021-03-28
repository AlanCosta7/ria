const express = require("express")
const cors = require("cors")
const path = require('path')
const htmlpath = path.resolve(__dirname, 'dist', 'pwa')
const app = express()
app.use(cors())

app.use(express.static(htmlpath))

// app.get('/*', (req, res) => {
//   console.log(htmlpath)
//   res.sendFile(htmlpath)
// })
const port = process.env.PORT || 9000

app.listen(port)
