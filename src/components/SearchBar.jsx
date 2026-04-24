export default function SearchBar({ setSearch }) {
  return (
    <input
      type="text"
      placeholder="Search Tamil movies..."
      className="bg-black text-white w-full p-3 rounded-xl border shadow-sm focus:outline-none"
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}   