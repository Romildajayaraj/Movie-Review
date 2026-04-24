import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?i=${id}&apikey=ee916882`)
      .then((res) => res.json())
      .then((data) => setMovie(data));
  }, [id]);

  if (!movie) return <h2 className="text-white p-6">Loading...</h2>;

  return (
    <div className="min-h-screen bg-black text-white p-6">

      {/* 🔙 Back */}
      <button
        onClick={() => navigate(-1)}
        className="mb-6 px-4 py-2 bg-gray-800 rounded"
      >
        ⬅ Back
      </button>

      <div className="flex flex-col md:flex-row gap-8">

        {/* 🎬 Poster */}
        <img
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : `/images/${movie.imdbID}.jpg`
          }
          className="w-full md:w-1/3 rounded-xl"
        />

        {/* 📄 Details */}
        <div>
          <h1 className="text-3xl font-bold">{movie.Title}</h1>

          <p className="text-gray-400 mt-2">
            {movie.Year} • {movie.Genre}
          </p>

          <p className="mt-4">{movie.Plot}</p>

          <p className="mt-4">
            <b>Cast:</b> {movie.Actors}
          </p>

          <p>
            <b>Director:</b> {movie.Director}
          </p>

          <p>
            <b>IMDb Rating:</b> ⭐ {movie.imdbRating}
          </p>
        </div>
      </div>

      {/* 🎥 Trailer Section */}
      <div className="mt-10">
        <h2 className="text-xl font-bold mb-4">Watch Trailer</h2>

        <a
  href={`https://www.youtube.com/results?search_query=${movie.Title} trailer`}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block mt-4 px-6 py-3 bg-red-600 rounded-lg"
>
  ▶ Watch Trailer on YouTube
</a>
      </div>

    </div>
  );
}