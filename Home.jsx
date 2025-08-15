import SearchBar from '../components/SearchBar';
import '../styles/Home.css';
import MovieList from '../components/MovieList';
import { useState, useEffect } from "react";

const Home = () => {
  const [movies, setMovies] = useState([]); // State to store fetched movies
  const [searchInput, setSearchInput] = useState("Movies");  // State to store search input
  
  // Fetch movies when search input changes
  useEffect(() => {
    const fetchData = async () => {
      if (!searchInput.trim()) return; //If input is empty skip

      try {
        const res = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=4036de08&s=${searchInput}`);
        const data = await res.json();
        console.log("Fetched data:", data); // debug

        if (data.Response === "True") {
          setMovies(data.Search);
        } else {
          setMovies([]);
          console.log("No results found!");
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
        setMovies([]);
      }
    };

    fetchData();
  }, [searchInput]);

  return (
    <div>
      <h1>Welcome to Red Curtain</h1>
      <p>Where you can find your DESIRED MOVIE </p>
      <SearchBar onSearch={setSearchInput} />
      <MovieList movies={movies} />
    </div>
  );
};

export default Home;
