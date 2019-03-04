const clientId = '421ee1bf0c0340f696279488733515f7';
const redirectUri = 'https://medlimusic.com/';
const spotifyUrl = `https://accounts.spotify.com/authorize?response_type=token&scope=playlist-modify-public&client_id=${clientId}&redirect_uri=${redirectUri}`;
let accessToken = undefined;
let expiresIn = undefined;

/* Upon arrival of the page, user is must authorize Spotify to access their account */
const Spot = {
    getAccessToken() {
        if (accessToken) {
            return accessToken;
        }
        const urlAccessToken = window.location.href.match(/access_token=([^&]*)/);
        const urlExpiresIn = window.location.href.match(/expires_in=([^&]*)/);
        if (urlAccessToken && urlExpiresIn) {
            accessToken = urlAccessToken[1];
            expiresIn = urlExpiresIn[1];
            window.setTimeout(() => accessToken = '', expiresIn * 1000);
            window.history.pushState('Access Token', null, '/');
        } else {
            window.location = spotifyUrl;
        }
        return accessToken;
    },

    /* Retrieves data from the Spotify API. Query searches for artists, albums, or track names. Spotify API
    returns an array of songs that matches query.  */
    search(query) {
        const searchUrl = `https://api.spotify.com/v1/search?type=track%2Calbum%2Cartist&q=${query.replace(' ', '+')}`;
        return fetch(searchUrl, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })
            .then(response => response.json())
            .then(jsonResponse => {
                console.log(jsonResponse);
                if (!jsonResponse.tracks) return [];
                return jsonResponse.tracks.items.map(track => {

                    return {
                        id: track.id,
                        songName: track.name,
                        artist: track.artists[0].name,
                        albumName: track.album.name,
                        albumArt: track.album.images[0].url,
                        uri: track.uri,
                        preview: track.preview_url
                    }

                })
            });
    },

    /* This function retrieves information about a track from the Spotify API. The API returns
    JSON data about the track. */
    getSongData(query) {
        const searchURL = `https://api.spotify.com/v1/tracks/${query}`;
        return fetch(searchURL, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })
            .then(response => response.json())
            .then(function (track) {

                    console.log(track);
                    console.log("Track ID: " + track.id);
                    console.log("Song Name: " + track.name);
                    console.log("Artist: -" + track.artists[0].name);
                    console.log("Album Name: -" + track.album.name);
                    console.log("Album Art: -" + track.album.images[0].url);
                    console.log("Track URI: -" + track.uri);
                    console.log("Preview URL: " + track.preview_url);

                    return {
                        id: track.id,
                        songName: track.name,
                        artist: track.artists[0].name,
                        albumName: track.album.name,
                        albumArt: track.album.images[0].url,
                        uri: track.uri,
                        preview: track.preview_url
                    }
                }
            )
    }

};

export default Spot;
