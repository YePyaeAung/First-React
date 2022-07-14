import { Component } from "react";
import MovieCard from "../movie-card/movie-card";

class MovieList extends Component {
    render() {
        return (
            <div>
                { this.props.movies.map((movie) => {
                    return <MovieCard movie={ movie }/>
                })}
            </div>
            );
        }
    }
    
    export default MovieList;