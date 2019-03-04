import React from 'react';
import axios from 'axios';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Song extends React.Component {
    constructor(props) {
        super(props);

        this.requestSongHandler = this.requestSongHandler.bind(this);
    }

    /* Function that adds toast notification on successful addition of song to playlist */
    songAdded = () =>
        toast("Song added to playlist!", {
            position: "top-center"});

    /* Handles click event to add a song to the playlist. Post request made using track ID and party ID.
    If there is a response from the server, the song was added and toast notification called. */
    requestSongHandler(event) {
        event.preventDefault();
        const songInfo = {
            spotifyId: this.props.track.id,
            potId: this.props.party
        };
        axios.post('https://medlimusic.com/addSong', songInfo)
            .then(response => {
                console.log(response);
                console.log("Song added to playlist!");
                this.songAdded();
            })
            .catch(error => {
                console.log(error);
            })


    }

    /* Taking the passed prop of track from SongList/NowPlayingComp and accessing artist, album, song */
    render() {
        return (
            <div className="text-center">
                {/*Test for partyID value  <h1>Party: {this.props.party}</h1> */}
                <h2>{this.props.track.artist}</h2>
                <h3 onClick={this.requestSongHandler}>{this.props.track.albumName} - {this.props.track.songName}</h3>
                <img className = "img-fluid" onClick={this.requestSongHandler} src={this.props.track.albumArt}/>
                {/* Test for track <p>TRACK ID: {this.props.track.id}</p> */ }

            </div>

        );
    }
}

export default Song;