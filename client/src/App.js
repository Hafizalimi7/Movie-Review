import './App.css';

function App() {
  return (
    <div className="App">
      <div className="form">
        <h1>Crud Application</h1> 
        <label>Movie Name</label>
        <input type="text" name="movieName"/>
        <label>Review</label>
        <input type="text" name="review"/>
        <button>Submit</button>
      </div>
    </div>
  );
}

export default App;
