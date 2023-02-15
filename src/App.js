import { useState, useEffect } from 'react';
import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form";
import './App.css';


function App() {
  const [movie, setMovie] = useState(null); 

  const getMovieData = (movieTitle) => {
    // console.log('calling fetch data')
    const url = 'https://www.omdbapi.com/?i=tt3896198&apikey=50532af1&t=' + movieTitle
    fetch(url)
    .then(response => response.json())
    .then(data => setMovie(data));
  
    // fetch is an http client- a function that makes an http request 
    // fetch returns a promise 
    // promises are objects that represent the eventual success or failure
    // of a long running task 
  }

  useEffect(() => {
    //this function will run when the app first loads in the browser
    getMovieData('Angus'); 
  }, [] ); // this is called a dependency array 
  // further reading: the observer pattern 

  return (
    <div className="App">
     <Form getMovieData={getMovieData} />
      <MovieDisplay movie={movie}  />
    </div>
  );
}

export default App;
