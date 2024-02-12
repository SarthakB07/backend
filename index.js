//console.log('first deploy of backend')
require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000
// this port can be 2k or 4k also but 3k is default given by it

app.get('/', (req, res) => {
  res.send('Hello World!')
})
// get created by us
app.get('/twitter',(req,res)=>{
    res.send('sarb07')
})

// again one more
app.get('/login',(req,res)=>{
    res.send('<h1> please login at aadisarth')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
