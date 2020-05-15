import React from "react";
import styled from "styled-components";

const Image = styled.div`
  display: flex;
  justify-content : center;

  img
  {
    width : 800px;
    height : 600px;

    @media( max-width : 800px ) 
    {
      width : 600px;
      height : 400px;
    }

    @media( max-width : 600px ) 
    {
      width : 400px;
      height : 300px;
    }
  }
`;

function Gallery( props )
{
  return(
    <Image>
        <img src = { props.image } alt = "Provided by NASA" />
    </Image>
  )
}

export default Gallery