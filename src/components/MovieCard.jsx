import { useNavigate } from "react-router-dom";

export default function MovieCard({ movie }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/movie/${movie.id}`)}
      className="relative rounded-2xl overflow-hidden shadow-lg cursor-pointer group"
    >
      {/* Image */}
      <img
        src={movie.image}
        alt={movie.title}
        className="h-64 w-full object-contain bg-black transition-transform duration-300 group-hover:scale-110"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-4 overflow-y-auto">
        
        <h2 className="text-white text-lg font-bold">
          {movie.title}
        </h2>

        <p className="text-gray-300 text-sm">
          {movie.year} • {movie.genre}
        </p>

        <p className="text-gray-200 text-xs mt-2 line-clamp-2">
          {movie.description}
        </p>

        {/* ⭐ CAST SECTION (ADD HERE) */}
        <h3 className="text-white text-xs mt-2 font-semibold">Cast:</h3>
        <div className="flex flex-wrap gap-1 mt-1">
          {movie.cast?.slice(0, 3).map((actor, index) => (
            <span
              key={index}
              className="bg-white/20 text-white px-2 py-0.5 rounded-full text-xs"
            >
              {actor}
            </span>
          ))}
        </div>

      </div>
    </div>
  );
}