import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import SearchBar from "../components/SearchBar";
import Filter from "../components/Filter";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("tamil");
  const [genre, setGenre] = useState("");

  // 🔥 Fetch from API
  useEffect(() => {
  const fetchMovies = async () => {
    try {
      let allMovies = [];

      for (let i = 1; i <= 10; i++) {
        const res = await fetch(
          `https://www.omdbapi.com/?s=${search}&page=${i}&apikey=ee916882`
        );
        const data = await res.json();

        if (data.Search) {
          allMovies = [...allMovies, ...data.Search];
        } else {
          break; // stop if no more results
        }
      }

      setMovies(allMovies);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  fetchMovies();
}, [search]);

  // 🔍 Filter (limited because API doesn't give genre in list)
  const filteredMovies = movies.filter((movie) =>
    movie.Title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-black text-white p-6">
      
      <h1 className="text-3xl font-bold mb-6 text-center">
        🎬 Tamil Movie Review
      </h1>

      {/* Search + Filter */}
      <div className="flex gap-4 mb-6">
        <SearchBar setSearch={setSearch} />
        <Filter setGenre={setGenre} />
      </div>

      {/* Movies */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {filteredMovies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
}