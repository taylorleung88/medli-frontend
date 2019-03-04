import React, {Component} from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import Contact from "./Contact";
import About from "./About";
import App from './App.js';
import NavBar from "./NavBar";

class Home extends React.Component {
    render() {
        return (

                <div>
                <NavBar/>
                <div>
                    <Switch>
                        <Route path="/" component={App} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/about" component={About} />
                        <Route component={() => <Redirect to="/"/>}/>
                    </Switch>
                </div>
                </div>


        );
    }
}

    export default Home;