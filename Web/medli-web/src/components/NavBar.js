import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import React from "react";
import icon from '../icon.jpg';
import './styles/App.css';

class NavBar extends React.Component {
    render() {

        return (
            <Router>
                <div>
                    <nav
                        className="navbar navbar-expand-lg navbar-light Yellow-background">
                       <a className="navbar-brand" href="/"><img className="" width="40" height="40" src={icon} />
                            </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarNavAltMarkup"
                            aria-controls="navbarNavAltMarkup"
                            aria-expanded="false"
                            aria-label="Toggle navigation">
<span
    className="navbar-toggler-icon"> </span>
                        </button>
                        <div
                            className="collapse navbar-collapse"
                            id="navbarNavAltMarkup">
                            <div
                                className="navbar-nav ml-auto">
                                <div
                                    className="nav-item "
                                ><Link to={'/about'} style={{color: '#0097E0'}} className="nav-link">About Us</Link></div>
                                <div
                                    className="nav-item"><Link to={'/contact'} style={{color: '#0097E0'}} className="nav-link">Contact</Link></div>
                            </div>
                        </div>
                    </nav>

                    <Link to="/about" component={About}/>
                    <Link to="/contact" component={Contact}/>
                </div>
            </Router>
        );
    }


}

export default NavBar;