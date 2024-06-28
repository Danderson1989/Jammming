import React from 'react';

export default function Tracklist ( { addedTracks, handleRemovingTracks } ) {
    
    return (
        <div>
            <ul>
                {addedTracks.map(t => 
                    <div className='tracklist-container' key={t.id}>
                        <li className='info'>
                            <div className="track-subtract">
                                <div>
                                    <p>{t.track} by{t.artist}</p>
                                    <p className="artist-span">{t.album}</p>
                                </div>
                                <p id ="subtract" onClick={() => {handleRemovingTracks(t.id)} }>-</p>
                            </div>
                        </li>
                    </div>
                )}
            </ul>
        </div>
    )
}