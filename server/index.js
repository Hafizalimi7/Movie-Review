const express = require('express')
const app = express()

app.get("/", (req,res) => {
  res.send("Welcome To The Backend")
})

app.listen(3001, () => {
  console.log('running on port 3001')
})

