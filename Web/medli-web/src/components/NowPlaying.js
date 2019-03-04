import React from 'react';
import axios from 'axios';
import './styles/App.css';
import Spot from "../SpotifyUtilities/spotify";
import NowPlayingComp from './NowPlayingComp.js';

class NowPlaying extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
        	nowPlaying: {},
			playing: false
		};
    }

    /*Calls method located in the spotify js file. Passes the spotify track ID
    to the API and returns JSON data about the song. Passes the track information
    and updates the state of this component. Returns playing as true if a track is playing.
    This will render the NowPlayingComp */
     getNowPlaying = (query) => {
        Spot.getSongData(query) //This will be the spotifyID
            .then(track => {
                this.setState({
                    nowPlaying: track, //pass track as prop to song component?
					playing: true
                });
            })
	};

     /* Code executed at mount time of this component. Sends post request to the
     server for the spotify track ID of the currently playing track. If there is a
     track ID returned, call the getSongData method to return track information. */
	componentDidMount() {
		let party = {
			potId: this.props.party
		};
		let self = this;
		this.setInterval = setInterval(() => {
            axios.post('https://medlimusic.com/nowPlaying', party)
                .then(function (response) {
                    console.log("Taylor: " + response.data.now_playing_spotify_id);
                    let theID = response.data.now_playing_spotify_id;
                    console.log(" HI " + theID);
                    if(response.data.now_playing_spotify_id != null) {
                        console.log(response);
                        console.log(response.data.now_playing_spotify_id);
                        self.getNowPlaying(theID); //Pass spotify ID as query to getNowPlaying
                    }
                    else {
                        console.log(response);
                        console.log(party);
                        console.log("Nothing playing!");

                    }
                })
		}, 500);
	}

    render() {

    	return(
    		<div>
				{ this.state.playing ? <NowPlayingComp track={this.state.nowPlaying} /> : null}
	    	</div>
    	);
    }
}

export default NowPlaying;