import React from 'react'

const FilterComponent = ({ filterText, onFilter, onClear }) => {
  return (
    <>
      <input
        id="search"
        type="text"
        placeholder="Filter By Name"
        aria-label="Search Input"
        value={filterText}
        onChange={onFilter}
      />
      <button type="button" onClick={onClear}>
        X
      </button>
    </>
  )
}

export default FilterComponent
