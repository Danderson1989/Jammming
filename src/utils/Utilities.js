export function requestUserAuth(clientId, redirectUri) {
    const params = new URLSearchParams();
    const scope = 'user-read-private user-read-email playlist-read-private playlist-read-collaborative playlist-modify-private playlist-modify-public';
    params.append("client_id", clientId);
    params.append("response_type", "code");
    params.append("redirect_uri", redirectUri);
    params.append("scope", scope);
    params.append("show_dialog", "true")

    document.location = `https://accounts.spotify.com/authorize?${params.toString()}`
};

export async function getAccessToken (code, clientId, clientSecret, redirectUri) {
  const Authorization = btoa(`${clientId}:${clientSecret}`);
  const endpoint = 'https://accounts.spotify.com/api/token'

  try {
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Authorization": `Basic ${Authorization}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      "grant_type": "authorization_code",
      "code": code,
      "redirect_uri": redirectUri
    }).toString()
    });

    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }

    const token = await response.json();
    return token;
  } catch(error) {
    console.log(error);
  }
};

export const trackSearch = async (userSearch, accessToken) => {
  const endpoint = "https://api.spotify.com/v1/search?q=";
  const q = userSearch.replace(" ", "%20");
  const type = "&type=track&limit=15";
  const query = endpoint + q + type;

  try {
    const response = await fetch(query, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });

    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }

    const tracks = await response.json();
    return tracks;
  } catch (error) {
    console.log(error.message);
  }

};

export async function getUserProfile(accessToken) {
  const endpoint = "https://api.spotify.com/v1/me";
  
  try {
  const response = await fetch(endpoint, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`}
  });

  if (!response.ok) {
    throw new Error('Network response was not ok ' + response.statusText);
  }

  const userId = await response.json();
  return userId;
  } catch (error) {
    console.log(error);
  }
};

export async function createPlaylist(id, accessToken, playlistName) {
  const endpoint = `https://api.spotify.com/v1/users/${id}/playlists`;

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: playlistName
      })
    });
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }

    const playlist = await response.json();
    return playlist;
  } catch (error) {
    console.log(error);
  }
};

export function addTrackUris(addedTracks) {
  
  const tracks = addedTracks.map(track => 
    `spotify:track:${track.uri}`)
    
    return tracks;
}

export async function addTracksToPlaylist(playlistId, accessToken, trackUris) {
  const endpoint = `https://api.spotify.com/v1/playlists/${playlistId}/tracks`;
  
  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        uris: trackUris,
        position: 0
      })
    });

    if (!response.ok) {
      throw new Error ('Network response was not ok ' + response.statusText)
    }
  } catch (error) {
    console.log(error)
  }
};