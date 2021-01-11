import React from 'react'
import './DisplayMessage.css';

export default function DisplayMessage({message}) {

    const displayMessage= () => {
        if(message !== 'Invalid Url' ){
            return <p><a rel="noreferrer" target="_blank" href={message}>{message}</a></p> 
        }else{
            return <p>{message}</p>
        }
    }
    return (
        <div className="message-wrapper">
            {displayMessage()}
        </div>
    )
}
