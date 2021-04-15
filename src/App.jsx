import React, {useState, useEffect} from 'react'
import './App.css'
import QuoteContainer from './QuoteContainer/QuoteContainer'
import Loader from './Loader/Loader'

function App() {
    //Set States, API & ProxyURLs
    const [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");
    const [quoteClass, setQuoteClass] = useState("")
    const [loader, setLoader] = useState(false)
    const proxyUrl = 'https://polar-everglades-12070.herokuapp.com/';
    const apiUrl = "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json";

    //Call the API
    const quoteAPI = async () =>{
        setLoader(true);
        try{
            const response = await fetch(proxyUrl + apiUrl);
            const data = await response.json();
            setQuote(data.quoteText);
            if(data.quoteAuthor === ''){
                setAuthor('Unknown');
            } else{
                setAuthor(data.quoteAuthor)
            }
            if (data.quoteText.length > 120){
                setQuoteClass("long-quote");
            }else{
                setQuoteClass("");
            }
            setLoader(false);
        } catch(error){
            quoteAPI();
    
        }
    }

    //Button function to call newQuote
    const newQuoteClick = (e)=> {
        e.preventDefault();
        return quoteAPI();
    } 

   useEffect(() => {
       quoteAPI();
       // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);
    return (
         <>
        {loader ? (<Loader />) : (<QuoteContainer newClass={quoteClass} quoteText={{quote}} quoteAuthor={{author}} onClick={newQuoteClick}/>)}
        </> 
    )
}

export default App
