import './App.css';
import React, {useState, useEffect} from "react"
import Axios from "axios"

function App() {

  const [movieName, setMovieName] = useState('')
  const [review, setReview] = useState('')

function submitReview(){  
  Axios.post('http://localhost:3001/api/insert', {
    movieName: movieName, 
    movieReview: review
  }).then(() => {
    alert('successful insert')
  })
}

  return (
    <div className="App">
      <div className="form">
        <h1>Crud Application</h1> 
        <label>Movie Name</label>
        <input 
          type="text" 
          name="movieName" 
          onChange={(e) => {
            setMovieName(e.target.value);
          }}/>
        <label>Review</label>
        <input 
          type="text" 
          name="review" 
          onChange={(e) => {
            setReview(e.target.value)
          }}/>
        <button onClick={submitReview}>Submit</button>
      </div>
    </div>
  );
}

export default App;
