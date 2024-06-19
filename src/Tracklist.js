import React from 'react';

export default function Tracklist ( { addedTracks, handleRemovingTracks } ) {
    
    return (
        <div>
            <ul>
                {addedTracks.map(t => 
                <div className='container' key={t.id}>
                    <li className='info'>
                        <p>{t.track} by {t.artist}</p>
                        <p>{t.album}</p>
                    <p id='minus' onClick={() => {handleRemovingTracks(t.id)} }>-</p>
                    </li>
                </div>
                )}
            </ul>
        </div>
    )
}