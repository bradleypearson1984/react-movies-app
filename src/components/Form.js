import { useState } from 'react';

const Form = (props) => {
    const [formState, setFormState] = useState({
        movieTitle: ""
    });

    // an event handler is a function that gets called 
    // after a certain event occurs
    
    // all event handlers can access an event object
    const handleChange = (event) => {
       setFormState({movieTitle: event.target.value})
    };

    const handleSubmit = (event) => {
        event.preventDefault(); 
        props.getMovieData(formState.movieTitle);
    };


    return (
        <div>
            <form onSubmit={handleSubmit} >
                <input type="text" 
                value={formState.movieTitle} 
                onChange={handleChange} 
                />
                <input type="submit" value="Search" />
            </form>
        </div>
    )
  };
  
  export default Form;