import React from 'react';
import App from './App.js';
import './styles/App.css';

const Button = (props) => {
    
    return(
    	<div>
	        <button className="button">{props.text}</button>
	    </div>
    );
}

export default Button;