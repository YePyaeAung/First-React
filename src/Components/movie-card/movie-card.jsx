import { Component } from "react";

class MovieCard extends Component {
    render() {
        const { Poster, Title, Year, Runtime } = this.props.movie;
        return (
            <div>
                <img src={ Poster } alt={ Title }/>
                <h2>{ Title }</h2>
                <span>{ Year }    </span>
                <span>{ Runtime }</span>
            </div>
        )
    }
}
export default MovieCard;