import React, { useState, useEffect } from "react";
import axios from "axios";

// css files
import "./App.css";

// components
import Header from "./Components/Header/Header";
import Loader from "./Components/Loader/Loader";
import Gallery from "./Components/Gallery/Gallery";
import Description from "./Components/Description/Description";

// date explanation hdurl title url
function App() 
{
  const [ counter, setCounter ] = useState( 3 );
  const [ nasaData, setNasaData ] = useState( null );
  
  useEffect( () => 
  {
    axios.get( "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY" )
         .then( response => setNasaData( response.data ) )
         .catch( response =>
         {
           console.log( "Something Went Wrong!!!" );

           setTimeout( () => 
           {
             if( counter > 0 )
              setCounter( counter - 1 )
           }, 5000 ) 
         } )
  }, [ counter ] );

  console.log( nasaData );

  return (
    <div className = "App">
      <Header />
      { nasaData ? <Gallery image = { nasaData.url } /> : <Loader /> }
      { 
        nasaData ?  <Description date        = { nasaData.date } 
                                 title       = { nasaData.title } 
                                 explanation = { nasaData.explanation } /> 
                    : <Description /> 
      }
    </div>
  );
}

export default App;