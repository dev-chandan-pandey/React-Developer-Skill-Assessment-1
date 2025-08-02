// src/components/FilterBar.jsx
const FilterBar = ({ filterType, setFilterType, searchTerm, setSearchTerm, propertyTypes }) => {
  return (
    <div className="filter-bar">
      <input
        type="text"
        placeholder="Search by name or location..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      <select 
        value={filterType} 
        onChange={(e) => setFilterType(e.target.value)}
        className="type-filter"
      >
        <option value="">All Types</option>
        {propertyTypes.map(type => (
          <option key={type} value={type}>{type}</option>
        ))}
      </select>
    </div>
  );
};

export default FilterBar;