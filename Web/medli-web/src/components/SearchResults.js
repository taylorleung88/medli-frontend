import React from 'react';
import './styles/App.css';
import SongList from './SongList.js';

class SearchResults extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="text-center">
                <h1>Search Results</h1>
                <SongList
                    party={this.props.party}
                    tracks = {this.props.searchResults}
                />
            </div>
        );
    }
}


export default SearchResults;