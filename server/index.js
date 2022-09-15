const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express();
const mysql = require('mysql');

var db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "CRUDDatabase",
});

app.use(cors())
app.use(express.json())//changes object into json
app.use(bodyParser.urlencoded({extended: true}))

//gets all data from movie_review and sends it to the frontend
app.get("/api/get", (req,res) => {
  const sqlSelect = "SELECT * FROM movie_review"
  db.query(sqlSelect, (err,result) => {
    res.send(result)
  })
})

//insert data into db
app.post("/api/insert", (req,res) => {
  const movieName = req.body.movieName
  const movieReview = req.body.movieReview


  const sqlInsert = 
    "INSERT INTO movie_review (movieName, movieReview) VALUES (?,?)"
  db.query(sqlInsert, [movieName, movieReview], (err,result) => {
    console.log(`number of items entered database: ${result.affectedRows}`)
  });
});


//lets you know when port is running
app.listen(3001, () => {
  console.log('running on port 3001')
})
