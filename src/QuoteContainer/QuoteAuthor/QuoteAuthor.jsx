import React from 'react'
import './QuoteAuthor.css'

function QuoteAuthor(props) {
    return (
        <div className="quote-author">
            <span>{props.quoteAuthor}</span>
        </div>
    )
}

export default QuoteAuthor
