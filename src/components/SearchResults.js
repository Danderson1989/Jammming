import React from 'react';
import Track  from './Track'

export default function SearchResults( { searchResults, handleAddedTracks, trackSearch } ) {
    return (
        <>
        <h2>Results</h2>
            { typeof searchResults.tracks !== "undefined" && 
            <div className='container'>
                <ul>
                    {searchResults.tracks.items.map(s => (
                        <li key={s.id}>
                            <Track
                                searchResult={s}
                                handleAddedTracks={handleAddedTracks}
                            />
                        </li>
                        )                
                    )}
                </ul>
            </div> }
        </>
        )
    
};