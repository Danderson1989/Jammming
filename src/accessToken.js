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
  const query = 'https://accounts.spotify.com/api/token'

  try {
  const response = await fetch(query, {
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
    const tracks = await response.json();
    return tracks;
  } catch (error) {
    console.log(error.message);
  }

};

