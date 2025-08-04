const SearchBar = ({ query, setQuery }) => (
  <input
    type="text"
    placeholder="Search by title or author..."
    className="border p-2 w-full mb-4"
    value={query}
    onChange={(e) => setQuery(e.target.value)}
  />
);

export default SearchBar;