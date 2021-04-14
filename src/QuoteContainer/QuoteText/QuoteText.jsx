import React from 'react'
import './QuoteText.css'

function QuoteText(props) {
    return (
        <div className="quote-text">
            <i class="fas fa-quote-left"></i>
            <span>{props.quoteText.quote}</span>
        </div>
    )
}

export default QuoteText
