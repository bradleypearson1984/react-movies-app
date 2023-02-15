import './App.css';
import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form";


function App() {

  const getMovieData = (movieTitle) => {
    const url = 'https://www.omdbapi.com/?i=tt3896198&apikey=50532af1&t=' + movieTitle
    fetch(url)
    .then(response => response.json())
    .then(data => console.log(data));
  
    // fetch is an http client- a function that makes an http request 
    // fetch returns a promise 
    // promises are objects that represent the eventual success or failure
    // of a long running task 
  }

  return (
    <div className="App">
     <Form getMovieData={getMovieData} />
      <MovieDisplay />
    </div>
  );
}

export default App;
