import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [
        { id: 1, name: "Spider Man 1", year: 2009 },
        { id: 2, name: "Spider Man 2", year: 2011 },
        { id: 3, name: "Spider Man 3", year: 2015 },
      ],
    };
  }
  changeName = (event) => {
    this.setState({
      movies: [
        { name: event.target.value, year: 2018 },
        { name: "Spider Man 2", year: 2011 },
        { name: "Spider Man 3", year: 2015 },
      ],
    });
  }
  render() {
    return (
      <div className="App">
        <h1>Hello World...</h1>
        { this.state.movies.map((movie) => {
          return <h3 key={movie.id}>
            My Favourite Movie is { movie.name }. Released Year is { movie.year }</h3>
        })}
        <input type="text" onChange={ this.changeName } value={ this.state.movies[0].name }/>
      </div>
    );
  }
}

export default App;
