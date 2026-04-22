import { useState } from "react";
import moviesData from "../data/movies.json";
import MovieCard from "../components/MovieCard";
import SearchBar from "../components/SearchBar";
import Filter from "../components/Filter";

export default function Home() {
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("");

  const filteredMovies = moviesData.filter((movie) => {
    return (
      movie.title.toLowerCase().includes(search.toLowerCase()) &&
      (genre === "" || movie.genre === genre)
    );
  });

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      
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
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}