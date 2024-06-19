import { React, useState, useEffect } from 'react';
import './App.css';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import Playlist from './Playlist';
import { requestUserAuth, getAccessToken, trackSearch,  } from './accessToken'

function App() {

const clientId = "318706de36214725959933a3c1369354";
const clientSecret = '0aa627dcc3c54d06ba84a289bfd6fbcb';
const redirectUri = 'http://localhost:3000/';

const [code, setCode] = useState(null);
const [accessToken, setAccessToken] = useState(null);
const [searchResults, setSearchResults] = useState({});
const [search, setSearch] = useState("");
const [playlistName, setPlaylistName] = useState("");
const [addedTracks, setAddedTracks] = useState([]);

//Authorize App to use make changes to clients Spotify account
useEffect(()=> {
  //Check for code in URL
  const params = new URLSearchParams(window.location.search);
  const codeFromUrl = params.get('code');

  if (!codeFromUrl) {
    requestUserAuth(clientId, redirectUri);
  } 

  setCode(codeFromUrl);
}, []);

// Get access Token
useEffect(()=> {
  async function fetchAccessToken() {
    if (code) {
      try {
        const token = await getAccessToken(code, clientId, clientSecret, redirectUri);
        setAccessToken(token);
      } catch (error) {
        console.log("Error fetching access token:", error);
      }
    } 
  }

fetchAccessToken();
}, [code]);

const handleSearch = e => {
    e.preventDefault();
    async function fetchSearchResults() {
        const userSearch =  await trackSearch(search, accessToken.access_token);
        setSearchResults(userSearch);
    }
    fetchSearchResults();
};

const handleInputChange = e => {
    setSearch(e.target.value)
}

const handlePlaylistName = e => {
    setPlaylistName(e.target.value);
}

const handleAddedTracks = (artist, album, track, id, uri) => {
    const trackToAdd = {artist: artist, album: album, track: track, id: id, uri: uri}
    setAddedTracks([
        ...addedTracks,
        trackToAdd
    ]);
}

const handleRemovingTracks = (id) => {
    setAddedTracks(addedTracks.filter(track => 
        track.id !== id
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
            trackSearch = {trackSearch}
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

