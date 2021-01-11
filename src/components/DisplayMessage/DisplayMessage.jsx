import React from 'react'
import './DisplayMessage.css';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

export default function DisplayMessage({message}) {
    const displayMessage= () => {
        if(message !== 'Invalid Url' || message !== null ){
            return <Link target="_blank" to={'//'+message}>{message}</Link>
        }else{
            return <p>{message}</p>
        }
    }
    return (
        <div className="message-wrapper">
            <Router>
                {displayMessage()}
            </Router>
        </div>
    )
}
