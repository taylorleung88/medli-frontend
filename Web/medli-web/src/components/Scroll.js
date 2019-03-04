import React from 'react';
import './styles/App.css';
import SearchResults from './SearchResults.js';

class Scroll extends React.Component {
    render() {
        return (
            <div style={{overflowY: 'scroll',  overflowX: 'hidden', height: '500px'}}>
                <SearchResults party={this.props.party} searchResults = {this.props.searchResults} />
            </div>
        );
    }
}

export default Scroll;