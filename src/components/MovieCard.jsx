import { useNavigate } from "react-router-dom";

export default function MovieCard({ movie }) {
  const navigate = useNavigate();

  // 🔥 Convert title to safe filename
  const formatTitle = (title) =>
    title
      ?.toLowerCase()
      .replace(/[^a-z0-9]/g, ""); // removes spaces + special chars

  return (
    <div
      onClick={() => navigate(`/movie/${movie.imdbID}`)} // ✅ FIXED
      className="bg-gray-900 rounded-xl overflow-hidden shadow-lg cursor-pointer hover:scale-105 transition"
    >
      {/* ✅ Image */}
      <img
  src={`/images/${movie.imdbID}.jpg`} // try imdbID first
  onError={(e) => {
    e.target.onerror = null;

    const titleImage = `/images/${movie.Title
      .toLowerCase()
      .replace(/[^a-z0-9]/g, "")}.jpg`;

    // try title-based image next
    const img = new Image();
    img.src = titleImage;

    img.onload = () => {
      e.target.src = titleImage;
    };

    img.onerror = () => {
      // fallback to API or default
      e.target.src =
        movie.Poster && movie.Poster !== "N/A"
          ? movie.Poster
          : "/images/no-image.jpg";
    };
  }}
  alt={movie.Title}
  className="h-64 w-full object-contain object-top transition-transform duration-300 group-hover:scale-110"
/>

      {/* ✅ Basic Info */}
      <div className="p-2 text-white">
        <h2 className="text-sm font-semibold">{movie.Title}</h2>
        <p className="text-xs text-gray-400">{movie.Year}</p>
      </div>
    </div>
  );
}