import React from 'react';
import './FilterBar.css';

const FilterBar = ({ searchTerm, setSearchTerm, filterDate, setFilterDate, filterType, setFilterType }) => {
  return (
    <div className="filter-bar">
      <div className="filter-left">
        <select
          className="filter-select"
          value={filterDate}
          onChange={(e) => setFilterDate(e.target.value)}
        >
          <option value="">Filter by Date</option>
          <option value="1694736000">September 15, 2023</option>
          <option value="1700716800">December 1, 2023</option>
        </select>
        <select
          className="filter-select"
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
        >
          <option value="">Filter by Type</option>
          <option value="Signature">Signature</option>
          <option value="Yoga">Yoga</option>
          <option value="Standalone">Standalone</option>
        </select>
      </div>
      <div className="filter-right">
        <input
          className="search-input"
          type="text"
          placeholder="Search retreats by title"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </div>
  );
};

export default FilterBar;
