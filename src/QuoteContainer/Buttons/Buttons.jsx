import React from 'react'
import './Buttons.css'

const Buttons = (props) =>  {
    const {onClick, children} = props;
    const tweetQuote = ()=>{
        const twitterUrl = `https://twitter.com/intent/tweet?text=${props.quoteText} - ${props.quoteAuthor}`;
        window.open(twitterUrl, '_blank');
        console.log(props)
    }
    return (
        <div className="button-container">
            <button onClick={tweetQuote} className="twitter-button" title="Tweet this"><i className="fab fa-twitter"></i></button>
            <button className="new-quote" onClick={onClick}>{children}</button>
        </div>
    )
}

export default Buttons
