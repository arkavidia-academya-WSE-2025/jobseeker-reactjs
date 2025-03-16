import React from "react";

const SearchBar = ({ searchTerm, onSearchChange, onSearchSubmit }) => {
  return (
    <form onSubmit={onSearchSubmit} className="flex items-center w-full">
      <input
        type="text"
        value={searchTerm}
        onChange={onSearchChange}
        placeholder="Front-End Developer, Back-End Developer..."
        className="flex-grow p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-r-md"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
          />
        </svg>
      </button>
    </form>
  );
};

export default SearchBar;
