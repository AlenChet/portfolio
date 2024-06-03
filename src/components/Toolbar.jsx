import React from 'react';

const Toolbar = ({ filters, selected, onSelectFilter }) => (
  <div>
    {filters.map(filter => (
      <button
        key={filter}
        className={filter === selected ? 'selected' : ''}
        onClick={() => onSelectFilter(filter)}
      >
        {filter}
      </button>
    ))}
  </div>
);

export default Toolbar;