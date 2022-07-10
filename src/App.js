import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movieName: "Spider Man",
    };
  }
  render() {
    return (
      <div className="App">
        <h1>Hello World...</h1>
        <p>My Favourite Movie is { this.state.movieName }</p>
        <button onClick={ () => {
          this.setState({ movieName: "Iron Man"});
        }}>Iron Man</button>
        <button onClick={ () => {
          this.setState({ movieName: "Doctor Strange"});
        }}>Doctor Strange</button>
      </div>
    );
  }
}

export default App;
