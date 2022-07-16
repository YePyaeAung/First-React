import { Component } from 'react';
import './App.css';
import MovieList from './Components/movie-list/movie-list';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      showMovie: false,
      searchInput: '',
    };
  }
  componentDidMount() {
    fetch("https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies")
    .then((response) => response.json())
    .then((apiMovies) => this.setState(() => {
      return { movies: apiMovies, showMovie: true };
    }));
  }
  searchMoviesHandler = (event) => {
    const search = event.target.value.toLocaleLowerCase();
    this.setState( () => {
      return { searchInput: search };
    });
  }
  render() {
    let { showMovie, movies, searchInput } = this.state;
    let renderMovies = "Loading Movies...";

    const filteredMovies = movies.filter((movie) => {
      return movie.Title.toLocaleLowerCase().includes(searchInput);
    });

    if(showMovie) {
      renderMovies = (
        <MovieList movies = { filteredMovies }/>
      );
    }
    return (
      <div className="max-w-6xl mx-auto bg-slate-200">
        <h1 className="flex justify-center text-2xl font-semibold">Hello World...</h1>
        <div className="flex justify-center">
          <input className="m-2 p-2 text-grey-400 rounded-md" type='search' placeholder="Search Movies" onChange={ this.searchMoviesHandler }/>
        </div>
        { renderMovies }
      </div>
    );
  }
}

export default App;
