import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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
  render() {
    let { showMovie } = this.state;
    let renderMovies = "Loading Movies...";

    if(showMovie) {
      renderMovies = (
        <div>
          { this.state.movies.map((movie) => {
          return <h3 key={movie.Title}>
            My Favourite Movie is { movie.Title }. Released Year is { movie.Year }</h3>
        })}
        </div>
      );
    }
    return (
      <div className="App">
        <h1>Hello World...</h1>
        <input type='search' placeholder="Search Movies" onChange={ (event) => {
          const search = event.target.value;
          this.setState( () => {
            return { searchInput: search };
          });
        }}/>
        { renderMovies }
      </div>
    );
  }
}

export default App;
