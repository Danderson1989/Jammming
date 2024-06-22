import { React, useState, useEffect } from 'react';
import './App.css';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import Playlist from './Playlist';
import { requestUserAuth, getAccessToken, trackSearch, getUserProfile, createPlaylist, addTrackUris, addTracksToPlaylist} from '../utils/Utilities'
import { v4 as uuidv4 } from 'uuid';


function App() {

const clientId = "318706de36214725959933a3c1369354";
const clientSecret = 'Client Secret';
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
        console.log(token.access_token);
      } catch (error) {
        console.log("Error fetching access token:", error);
      }
    } 
  }

fetchAccessToken();
}, [code]);
//Set Search Results
const handleSearch = e => {
    e.preventDefault();
    async function fetchSearchResults() {
        const userSearch =  await trackSearch(search, accessToken.access_token);
        setSearchResults(userSearch);
    }
    fetchSearchResults();
    console.log(accessToken.access_token);
};
//Update Search state
const handleInputChange = e => {
    setSearch(e.target.value)
}
//Set Playlist name state
const handlePlaylistName = e => {
    setPlaylistName(e.target.value);
}
//Set state for added tracks to playlist
const handleAddedTracks = (artist, album, track, id, uri) => {
    const trackKey = uuidv4();
    const trackToAdd = {artist: artist, album: album, track: track, id: trackKey, uri: uri}
    setAddedTracks([
        ...addedTracks,
        trackToAdd
    ]);
}
// Set state for removed tracks for playlist
const handleRemovingTracks = (id) => {
    setAddedTracks(addedTracks.filter(track => 
        track.id !== id
    ))
}
// Get user id, create playlist, add selected tracks to playlist. If successful alert user and reset search, results, and playlist
const handlePlaylistSubmit = async () => {
  const userProfile = await getUserProfile(accessToken.access_token);
  const userId = userProfile.id;
  const playlist = await createPlaylist(userId, accessToken.access_token, playlistName);
  const playlistId = playlist.id;
  console.log(playlist);
  const trackUris = addTrackUris(addedTracks);
  const response = addTracksToPlaylist(playlistId, accessToken.access_token, trackUris);
  if (userId && playlistId && response) {
    alert("Playlist added, Great success!");
    setSearch("");
    setSearchResults({});
    setPlaylistName("");
    setAddedTracks([]);
  }
}

return (
    <div>
      <h1>Ja<em className="mmm">mmm</em>ing</h1>
      <div className="components-box">
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
                handlePlaylistSubmit = {handlePlaylistSubmit}
                accessToken = {accessToken}
            />
        </div>
      </div>
    </div>
)

};

export default App;

