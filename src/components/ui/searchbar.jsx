const SearchBar = ({ onSearch }) => {
  return (
    <div className="mb-6 flex items-center justify-center w-full max-w-lg mx-auto">
      <input
        type="text"
        placeholder="Search for courses..."
        onChange={(e) => onSearch(e.target.value)}
        className="w-full py-2 px-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200"
      />
      <button
        className="ml-4 py-2 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 transition-all duration-200"
        onClick={() => onSearch("")}
      >
        Clear
      </button>
    </div>
  );
};

export default SearchBar;
