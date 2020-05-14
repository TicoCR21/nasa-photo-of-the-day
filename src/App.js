import React from "react";
import axios from "axios";
// css files
import "./App.css";

const photoOfTheDataResponse = axios.get( "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY" )
                                    .then( response => console.log( response ) );

function App() 
{
  return (
    <div className = "App" >
      
    </div>
  );
}

export default App;
