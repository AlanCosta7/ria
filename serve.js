const express = require("express")
const cors = require("cors")

const app = express()
app.use(cors())

app.use(express.static('dist/pwa'))

const port = process.env.PORT || 8080

app.listen(port)
