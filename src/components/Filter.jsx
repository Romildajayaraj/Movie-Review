export default function Filter({ genre, setGenre }) {
  const genres = [
    "Action",
    "Drama",
    "Comedy",
    "Horror",
    "Sci-Fi",
    "Romance",
    "Thriller",
    "Fantasy"
  ];

  return (
    <select
      value={genre}
      onChange={(e) => setGenre(e.target.value)}
      className="p-3 bg-gray-900 text-white rounded-xl border border-gray-700 shadow-md focus:outline-none"
    >
      <option value="">All Genres</option>

      {genres.map((g) => (
        <option key={g} value={g}>
          {g}
        </option>
      ))}
    </select>
  );
}