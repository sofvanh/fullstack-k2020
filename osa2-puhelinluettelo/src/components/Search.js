import React from 'react'

const Search = (props) => {
    return <input value={props.searchTerm} onChange={props.handleSearchChange} />
}

export default Search