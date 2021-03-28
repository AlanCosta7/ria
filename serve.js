const express = require("express")
const cors = require("cors")

const app = express()
app.use(cors())

app.use(express.static('dist/pwa'))

const port = process.env.PORT || 9000

app.listen(port, function() {
  console.log('serve iniciado na porta:', port)
})
