import React from 'react';
import Track  from './Track'

export default function SearchResults( { searchResults, handleAddedTracks } ) {
    return (
        <>
        <h2>Results</h2>
        <div className='container'>
            <ul>
                {searchResults.map(s => (
                    <li key={s.id}>
                        <Track
                            searchResult={s}
                            handleAddedTracks={handleAddedTracks}
                        />
                    </li>
                    )                
                )}
            </ul>
        </div>
        </>
    )
};