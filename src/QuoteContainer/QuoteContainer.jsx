import React from 'react'
import QuoteAuthor from './QuoteAuthor/QuoteAuthor'
import './QuoteContainer.css'
import QuoteText from './QuoteText/QuoteText'
import Buttons from './Buttons/Buttons'

function QuoteContainer(props) {
    return (
        <>
        <div className="quote-container">
            <QuoteText quoteText={props.quoteText} newClass={props.newClass}/>
            <QuoteAuthor quoteAuthor={props.quoteAuthor}/>
            <Buttons onClick={props.onClick} quoteText={props.quoteText} quoteAuthor={props.quoteAuthor}> New Quote </Buttons>
        </div>
        </>
    )
}

export default QuoteContainer
