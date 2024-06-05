import React from 'react';

function SearchBar( {handleSearch, search, handleInputChange } ) {

    return (
        <form onSubmit={handleSearch}>
            <label>Search Spotify By Song</label>
            <br></br>
            <input 
                type="text" 
                placeholder="Search Spotify" 
                value={search}
                onChange={handleInputChange}
            />
            <br></br>
            <button type="submit">Search</button>
        </form>
    )
}

export default SearchBar;