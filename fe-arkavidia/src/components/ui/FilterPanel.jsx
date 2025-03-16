// src/components/ui/FilterPanel.jsx
import React from "react";

const FilterPanel = ({ sortOption, onSortChange, filters, onFilterChange }) => {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <div className="flex items-center">
        <label className="mr-2">Sort by:</label>
        <select
          value={sortOption}
          onChange={onSortChange}
          className="p-2 border border-gray-300 rounded"
        >
          <option value="latest">Newest</option>
          <option value="oldest">Longest</option>
          <option value="popular">Populer</option>
        </select>
      </div>
      {/* Filter Lokasi */}
      <div className="flex items-center">
        <label className="mr-2">Location:</label>
        <input
          type="text"
          name="location"
          value={filters.location}
          onChange={onFilterChange}
          placeholder="Jakarta..."
          className="p-2 border border-gray-300 rounded"
        />
      </div>
      {/* Filter Kategori */}
      <div className="flex items-center">
        <label className="mr-2">Category:</label>
        <select
          name="category"
          value={filters.category}
          onChange={onFilterChange}
          className="p-2 border border-gray-300 rounded"
        >
          <option value="">All</option>
          <option value="it">IT</option>
          <option value="marketing">AI Engineer</option>
          <option value="finance">Accountant</option>
        </select>
      </div>
    </div>
  );
};

export default FilterPanel;
