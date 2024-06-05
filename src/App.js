import React, { useState } from 'react';
import './App.css';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import Playlist from './Playlist';
import { v4 as uuidv4 } from 'uuid';

function App() {

const [searchResults, setSearchResults] = useState([
    {artist: 'Dan', song: 'Dan\'s song', album: 'Dan\'s album', id: 0 },
    {artist: 'Dylan', song: 'Dylan\'s song', album: 'Dylan\'s album', id: 1 },
    {artist: 'Christy', song: 'Christy\'s song', album: 'Christy\'s album', id: 2 }
]);

const [search, setSearch] = useState("");

const [playlistName, setPlaylistName] = useState("");

const [addedTracks, setAddedTracks] = useState([]);

const handleSearch = e => {
    e.preventDefault();
    alert(search);
};

const handleInputChange = e => {
    setSearch(e.target.value)
}

const handlePlaylistName = e => {
    setPlaylistName(e.target.value);
}

const handleAddedTracks = (trackObj) => {
    const tracklistKey = uuidv4();
    setAddedTracks([
        ...addedTracks,
        {...trackObj, tracklistKey: tracklistKey}
    ]);
 
}

const handleRemovingTracks = (tracklistKey) => {
    setAddedTracks(addedTracks.filter(track => 
        track.tracklistKey !== tracklistKey
    ))
}

return (
    <>
    <h1>Jammming</h1>
    <SearchBar 
        search={search}
        handleSearch={handleSearch}
        handleInputChange={handleInputChange}
    />
    <div className='resultsAndPlaylist'>
        <SearchResults
            searchResults={searchResults}
            handleAddedTracks={handleAddedTracks}
        />
        <Playlist 
            playlistName={playlistName}
            handlePlaylistName={handlePlaylistName}
            addedTracks={addedTracks}
            handleRemovingTracks = {handleRemovingTracks}
        />
    </div>
    </>
)

};

export default App;
