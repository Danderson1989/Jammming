import { React } from 'react';

export default function Track ({ searchResult, handleAddedTracks }) {
    return (
        <div className='container'>
            <div className='info'>
                <p>{searchResult.song} by {searchResult.artist}</p>
                <p>{searchResult.album}</p>
            </div>
            <p id='add' onClick={() => {handleAddedTracks(searchResult)} }>+</p>
        </div>
    )
};