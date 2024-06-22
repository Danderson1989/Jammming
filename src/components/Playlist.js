import React from 'react';
import Tracklist from './Tracklist';

export default function Playlist( { playlistName, handlePlaylistName, addedTracks, handleRemovingTracks, handlePlaylistSubmit } ) {

    return (
        <div className='playlist-container'>
            <h2>Playlist</h2>
            <input value={playlistName}
            type="text"
            placeholder="Playlist Name"
            onChange={handlePlaylistName}
            />
            <Tracklist
            addedTracks={addedTracks}
            handleRemovingTracks={handleRemovingTracks}
            />
                <button type='submit'id="save" onClick={handlePlaylistSubmit}>Save</button>
        </div>
    )
}