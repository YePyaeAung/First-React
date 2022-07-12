import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [
        { name: "Spider Man 1", year: 2009 },
        { name: "Spider Man 2", year: 2011 },
        { name: "Spider Man 3", year: 2015 },
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
        <p>My Favourite Movie is { this.state.movies[0].name }. Released Year { this.state.movies[0].year }</p>
        <p>My Favourite Movie is { this.state.movies[1].name }. Released Year { this.state.movies[1].year }</p>
        <p>My Favourite Movie is { this.state.movies[2].name }. Released Year { this.state.movies[2].year }</p>
        <input type="text" onChange={ this.changeName } value={ this.state.movies[0].name }/>
      </div>
    );
  }
}

export default App;
