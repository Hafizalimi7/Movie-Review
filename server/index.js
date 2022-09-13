const express = require('express')
const app = express();
const mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "CRUDDatabase",
});

app.get("/", (req,res) => {
  console.log("Connected !")
  res.send("Connected !")
  const sql = "INSERT INTO movie_review (movieName, movieReview) VALUES ('inception', 'very good');"
  // const sql = "DELETE FROM movie_review WHERE movieReview = 'very good'";
  con.query(sql, (err, result) => {
    if (err) throw err;
    console.log("1 record inserted");
    console.log(result)
    // console.log("Number of records deleted: " + result.affectedRows);
  })
  
})

app.listen(3001, () => {
  console.log('running on port 3001')
})
