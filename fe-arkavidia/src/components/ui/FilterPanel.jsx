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
          <option value="latest">Terbaru</option>
          <option value="oldest">Terlama</option>
          <option value="popular">Paling populer</option>
        </select>
      </div>
      {/* Filter Lokasi */}
      <div className="flex items-center">
        <label className="mr-2">Lokasi:</label>
        <input
          type="text"
          name="location"
          value={filters.location}
          onChange={onFilterChange}
          placeholder="Lokasi..."
          className="p-2 border border-gray-300 rounded"
        />
      </div>
      {/* Filter Kategori */}
      <div className="flex items-center">
        <label className="mr-2">Kategori:</label>
        <select
          name="category"
          value={filters.category}
          onChange={onFilterChange}
          className="p-2 border border-gray-300 rounded"
        >
          <option value="">Semua</option>
          <option value="it">IT</option>
          <option value="marketing">Marketing</option>
          <option value="finance">Keuangan</option>
        </select>
      </div>
    </div>
  );
};

export default FilterPanel;
