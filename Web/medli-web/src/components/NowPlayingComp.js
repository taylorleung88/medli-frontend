import React from 'react';
import Song from './Song.js';
import './styles/App.css';

class NowPlayingComp extends React.Component {
    render() {
        return(
            <div className="nowPlaying">
                <h1 style={{color: '#0097E0'}} className="text-center">Now Playing</h1>
                <Song track={this.props.track}/>
            </div>
        )
    }
}

export default NowPlayingComp;