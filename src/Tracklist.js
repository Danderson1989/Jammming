import React from 'react';

export default function Tracklist ( { addedTracks, handleRemovingTracks } ) {
    let trackListKey = 0;
    
    return (
        <div>
            <ul>
                {addedTracks.map(track => (
                <div className='container' key={track.id}>
                    <li className='info'>
                        <p>{track.song} by {track.artist}</p>
                        <p>{track.album}</p>
                    <p id='minus' onClick={() => {handleRemovingTracks(track.tracklistKey)} }>-</p>
                    </li>
                </div>
                ))}
            </ul>
        </div>
    )
}