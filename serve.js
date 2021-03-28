const express = require("express")
const cors = require("cors")

const app = express()
app.use(cors())

app.use(express.static(__dirname + '/dist/pwa/'))
app.get(/.*/, function(req, res) {
  res.sendfile(__dirname + '/dist/pwa/index.html')
})
const port = process.env.PORT || 5000

app.listen(port)
 console.log('Server started...', port)
