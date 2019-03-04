import React from 'react';
import Song from './Song.js';

class SongList extends React.Component {
    constructor(props) {
        super(props);
    }

    // Search results returned array of songs. Maps every track to a song component to create a list of songs
    render() {
        return (
            <div>
                {this.props.tracks.map(track => {
                    return (
                        <div>
                        <Song
                            party={this.props.party}
                            track = {track}
                            key = {track.id}
                        />
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default SongList;