import { Component } from "react";

class MovieList extends Component {
    render() {
        return (
            <div>
                { this.props.movies.map((movie) => {
                    return <h3 key={movie.Title}>
                    My Favourite Movie is { movie.Title }. Released Year is { movie.Year }</h3>
                })}
            </div>
            );
        }
    }
    
    export default MovieList;