export default function Filter({ setGenre }) {
  return (
    <select
      onChange={(e) => setGenre(e.target.value)}
      className="p-3 rounded-xl border shadow-sm"
    >
      <option value="">All Genres</option>
      <option value="Action">Action</option>
      <option value="Drama">Drama</option>
      <option value="Comedy">Comedy</option>
      <option value="Horror">Horror</option>
      <option value="Sci-fi">Science Fiction</option>
      <option value="Romance">Romance</option>
      <option value="Thriller">Thriller</option>
      <option value="Fantasy">Fantasy</option>
    </select>
  );
}