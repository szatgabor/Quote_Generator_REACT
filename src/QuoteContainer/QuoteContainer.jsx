import React from 'react'
import QuoteAuthor from './QuoteAuthor/QuoteAuthor'
import './QuoteContainer.css'
import QuoteText from './QuoteText/QuoteText'
import Buttons from './Buttons/Buttons'
import { useState, useEffect } from 'react';

function QuoteContainer() {
    const [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");
    const proxyUrl = 'https://polar-everglades-12070.herokuapp.com/';
    const apiUrl = "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json";

    const quoteAPI = async () =>{
        let arrayOfQuotes = [];
        try{
            const response = await fetch(proxyUrl + apiUrl);
            const data = await response.json();
            arrayOfQuotes = data;
            setQuote(arrayOfQuotes.quoteText);
            setAuthor(arrayOfQuotes.quoteAuthor);
        } catch(error){
            console.log(error);
            quoteAPI();
    
        }
    }
    const newQuoteClick = ()=> {
        return quoteAPI();
    } 

   useEffect(() => {
       quoteAPI();
   });

    return (
        <div className="quote-container">
            <QuoteText quoteText={{quote}} />
            <QuoteAuthor quoteAuthor={{author}}/>
            <Buttons onClick={newQuoteClick}> New Quote </Buttons>
        </div>
    )
}

export default QuoteContainer
