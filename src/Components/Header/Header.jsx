import React from "react";
import styled from "styled-components";

const NasaHeader = styled.h1`
  margin : 100px 0 30px;
  font-size : 4rem;
  letter-spacing : 10px; 
  position: relative;
`;

const NasaSubTitle = styled.h2`
  font-size : 2rem;
  letter-spacing : 5px;
  margin-bottom : 60px;
`;

function Header()
{
  return(
    <header className = "nasaHeader">  
        <NasaHeader> NASA </NasaHeader>
        <NasaSubTitle> Astronomy Photo of the Day </NasaSubTitle>
    </header>
  )
}

export default Header