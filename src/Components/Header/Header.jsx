import React, { useEffect } from "react";

import "./Header.css";

function Header()
{
  return(
    <header className = "nasaHeader">  
        <h1 className = "nasaTitle"> NASA </h1>
        <h2 className = "nasaSubTitle"> Astronomy Photo of the Day </h2>
    </header>
  )
}

export default Header