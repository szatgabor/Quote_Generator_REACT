import React from 'react'
import './Buttons.css'

const Buttons = (props) =>  {
    const {onClick, children} = props;
    return (
        <div className="button-container">
            <button className="twitter-button" title="Tweet this"><i className="fab fa-twitter"></i></button>
            <button className="new-quote" onClick={onClick}>{children}</button>
        </div>
    )
}

export default Buttons
