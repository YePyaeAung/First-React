import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import MovieList from "./Components/movie-list/movie-list";
import About from "./Pages/About";
import MovieDetails from "./Pages/MovieDetails";

const App = () => {
  const [ movies, setMovies ] = useState([]);
  const [ showMovie, setShowMovie ] = useState(false);
  const [ searchInput, setSearchInput ] = useState('');

  useEffect(() => {
    fetch("http://localhost:8000/movies")
    .then((response) => response.json())
    .then((apiMovies) => {
      setMovies(apiMovies);
      setShowMovie(true);
    });
  }, []);
  const searchMoviesHandler = (event) => {
  const search = event.target.value.toLocaleLowerCase();
    setSearchInput(search);
  }
  const filteredMovies = movies.filter((movie) => {
    return movie.Title.toLocaleLowerCase().includes(searchInput);
  });
  
  let renderMovies = "Loading Movies...";
  if(showMovie) {
    renderMovies = (
      <MovieList movies = { filteredMovies }/>
    );
  }
  return (
    <div className="max-w-6xl mx-auto bg-slate-200">
      <h1 className="flex justify-center text-2xl font-semibold">Hello World...</h1>
      <div className="flex justify-center">
        <input className="m-2 p-2 text-grey-400 rounded-md" type='search' placeholder="Search Movies" onChange={ searchMoviesHandler }/>
      </div>
      <Routes>
        <Route path="/" element={renderMovies}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/movies/:id" element={<MovieDetails/>}></Route>
      </Routes>
    </div>
  );
}
export default App;