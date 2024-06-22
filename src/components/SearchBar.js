import React from 'react';
import './SearchBar.css'

export default function SearchBar( {handleSearch, search, handleInputChange } ) {

    return (
        <div className="searchbar">
            <form onSubmit={handleSearch}>
                <label>Search Spotify By Song</label>
                <br></br>
                <input 
                    type="text" 
                    placeholder="Search Spotify" 
                    value={search}
                    onChange={handleInputChange}
                />
                <button type="submit">Search</button>
            </form>
        </div>
    )
};
