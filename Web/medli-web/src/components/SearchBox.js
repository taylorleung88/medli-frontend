import React from 'react';
import './styles/App.css';
import Spot from "../SpotifyUtilities/spotify";
import Scroll from './Scroll.js';
import SearchResults from './SearchResults';

class SearchBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: "",
            searchResults: [],
            showResults: false
        };
        this.changeHandler = this.changeHandler.bind(this);
        this.searchHandler = this.searchHandler.bind(this);
        this.searchSpotify = this.searchSpotify.bind(this);
    }

    searchSpotify(query) {
        Spot.search(query)
            .then(track => {
                this.setState({
                    searchResults: track
                });
            })
    }

    //This method is triggered when there is a change in the search box. It updates the state of query in App
    changeHandler(event) {
        let updateQuery = event.target.value;
        this.setState({
            query: updateQuery
        });
    }

    //Method triggered on click. Calls searchSpotify from App.js
    searchHandler() {
        this.searchSpotify(this.state.query);

        //This will clear the input field after search
        this._input.value = "";
        this._input.focus();

        this.setState({
            showResults: true
        });
    }

    //This method allows us to search via enter button
    onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>): void => {
        if (event.key === 'Enter') {
            event.preventDefault();
            event.stopPropagation();
            this.searchHandler();
            this.setState({
                showResults: true
            });
        }
    }

    render() {

        let self = this;

        return (
            <div>
                <input className="form-control Input-placeholder"
                       type="search"
                       placeholder="Enter an artist, album, or track"
                       onChange={this.changeHandler}
                       onKeyDown={this.onKeyDown}
                       ref={
                           function (el) {
                               self._input = el;
                           }
                       }
                />
                {/* Use this to test for query change - <h1>Search Results for {this.state.query}</h1> */}
                <div className="text-center">
                    <button type="submit" className="btn-lg button" onClick={this.searchHandler}>Search</button>
                </div>
                {this.state.showResults ?
                    <Scroll party={this.props.party} searchResults={this.state.searchResults}/> : null}

            </div>
        );
    }
}

export default SearchBox;