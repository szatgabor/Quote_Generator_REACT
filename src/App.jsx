import React, {useState, useEffect} from 'react'
import './App.css'
import QuoteContainer from './QuoteContainer/QuoteContainer'

function App() {
    const [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");
    const proxyUrl = 'https://polar-everglades-12070.herokuapp.com/';
    const apiUrl = "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json";

    const quoteAPI = async () =>{
        try{
            const response = await fetch(proxyUrl + apiUrl);
            const data = await response.json();
            setQuote(data.quoteText);
            if(data.quoteAuthor === ''){
                setAuthor('Unknown');
            } else{
                setAuthor(data.quoteAuthor)
            }
            // setLoader(true);
        } catch(error){
            quoteAPI();
    
        }
    }
    const newQuoteClick = (e)=> {
        e.preventDefault();
        return quoteAPI();
    } 

   useEffect(() => {
       quoteAPI();
   }, []);
    return (
         <>
        <QuoteContainer quoteText={{quote}} quoteAuthor={{author}} onClick={newQuoteClick}/>
        </> 
    )
}

export default App
