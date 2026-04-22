import { useParams, useNavigate } from "react-router-dom";
import movies from "../data/movies.json";
import Rating from "../components/Rating";

export default function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const movie = movies.find((m) => m.id === parseInt(id));

  if (!movie) return <h2>Movie not found</h2>;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      
      <button
        onClick={() => navigate(-1)}
        className="mb-4 px-4 py-2 bg-black text-white rounded"
      >
        ⬅ Back
      </button>

      <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col md:flex-row gap-6">
        
        <img
          src={movie.image}
          className="w-full md:w-1/3 rounded-xl"
        />

        <div>
          <h1 className="text-3xl font-bold">{movie.title}</h1>
          <p className="text-gray-500 mt-2">
            {movie.year} • {movie.genre}
          </p>

          <p className="mt-4">{movie.description}</p>

          <h3 className="mt-4 font-semibold">Rate this movie:</h3>
          <Rating value={movie.rating} />
        </div>
      </div>
    </div>
  );
}