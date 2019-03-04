import React from 'react';
import './styles/App.css';
import axios from 'axios';
import SearchBox from './SearchBox.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NowPlaying from './NowPlaying.js';

class PartyID extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			PID: "",
            PartyPW: "",
			party: "",
			showPID: true
		};

		this.updatePID = this.updatePID.bind(this);
		this.updatePartyPW = this.updatePartyPW.bind(this);
        this.joinPartyHandler = this.joinPartyHandler.bind(this);
        PartyID.notify = PartyID.notify.bind(this);
        PartyID.joinFailure = PartyID.joinFailure.bind(this);
	}

    updatePID(event) {
        let updatePID = event.target.value;
        this.setState({
            PID: updatePID
        });
    }

    updatePartyPW(event) {
        let updatePW = event.target.value;
        this.setState({
            PartyPW: updatePW
        });
    }

    static notify() {
        toast("Joined party!", {
            position: "top-center"});
    }

    static joinFailure () {
		toast.error("Username and password doesn't match an existing party!", {
            position: "top-center"});
    }

    joinPartyHandler(event) {
		event.preventDefault();
		let self =this;
		const login = {
			name: this.state.PID,
			password: this.state.PartyPW
		};

    	axios.post('https://medlimusic.com/joinPot', login)
			.then(function (response) {
                console.log(response);
                console.log(login);
               if(response.data.result === "") {
               		console.log("Username and password doesn't match an existing party!");
               		PartyID.joinFailure();
			   }
			   else {
			   		console.log("Joined playlist: " + response.data.pot_id);
			   		self.setState({
						showPID: false,
						party: response.data.pot_id
					});
                   PartyID.notify();
			   }
			})
			.catch(function (error) {
            	console.log(error);
        });
	}


	render() {
		let form = null;
		if(this.state.showPID) {
			form = (
                <form>
                    <input className="form-control Input-placeholder" type="text" placeholder="Enter a Party ID" onChange={this.updatePID}/>
                    <input className="form-control Input-placeholder mt-1" type="password" placeholder="Enter Party Password" onChange={this.updatePartyPW}/>
                    <div className="text-center">
                        <button className="btn-lg button" type="submit" onClick={this.joinPartyHandler}>Join Party!</button>
                    </div>
                </form>
			);
		}
		return(
            <div className="container-fluid">
				<div className="row">
					<div className="col-xs-12 col-lg-8 offset-lg-2 mt-4">
						{form}
						{ !this.state.showPID ? <NowPlaying party={this.state.party} /> : null }
                        <p></p>
						{ !this.state.showPID ? <SearchBox party={this.state.party} /> : null }

					</div>
				</div>
		    </div>
		);
    }
}

export default PartyID;