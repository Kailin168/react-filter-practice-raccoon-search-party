import React from 'react'

function Search({ search, setSearch }) {

function handleSearch (event) {
  setSearch(event.target.value)
}

  return (
    <div className="search">
      <input type="text" 
      placeholder="search..." 
      value={search}
      onChange={handleSearch}
      />
    </div>
  )
}

export default Search
