const MovieDisplay = (props) => {
    if(!props.movie) {
        return<h2>Enter a movie to display...</h2>;
    }
    return (
        <main>
            <img src={props.movie.Poster} alt={props.movie.Title} />
            <h2> {props.movie.Title} </h2>
            <h3> {props.movie.Year} </h3>
        </main>
    )
  };
  
  
  export default MovieDisplay;