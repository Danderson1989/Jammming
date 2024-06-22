import React from 'react';

export default function Tracklist ( { addedTracks, handleRemovingTracks } ) {
    
    return (
        <div>
            <ul>
                {addedTracks.map(t => 
                <div className='tracklist-container' key={t.id}>
                    <li className='info'>
                        <div className="track-subtract">
                            <p>{t.track} by{t.artist}</p>
                            <p id ="subtract" onClick={() => {handleRemovingTracks(t.id)} }>-</p>
                        </div>
                        <p className="artist-span">{t.album}</p>
                    </li>
                </div>
                )}
            </ul>
        </div>
    )
}