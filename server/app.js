const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    console.log(req.query.fname)
    console.log(req.query.lname)
    console.log(req.query.fmail)
    console.log(req.query.fpass)
  res.send('Herzlich Willkomen!')
})



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})