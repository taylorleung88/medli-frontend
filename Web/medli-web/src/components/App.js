import React, {Component} from 'react';
import Spot from '../SpotifyUtilities/spotify.js';
import PartyID from './PartyID.js';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as SpotifyWebApi from '../../node_modules/spotify-web-api-js';
import logo from '../MEDLI-2_B.jpg';
import './styles/App.css';

//Spotify API variables
let Spotify = require('spotify-web-api-js');
let s = new Spotify();
const spotifyApi = new SpotifyWebApi();
let spotifyAccessToken = Spot.getAccessToken();
//console.log(spotifyAccessToken);
spotifyApi.setAccessToken(spotifyAccessToken);


class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row background">
                        <div
                            className="col-lg-8 offset-lg-2 ">
                            <div className=" mb-5 mt-2">
                                <img className="img-fluid " src={logo} /></div>
                            <div
                                className="form-area">

                                <PartyID
                                    placeholder="Enter party ID"> </PartyID>
                                <ToastContainer/>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default App;
