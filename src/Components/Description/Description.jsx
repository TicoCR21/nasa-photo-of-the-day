import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const DescriptionDiv = styled.div`
  margin : 70px;

  .title
  {
    font-size : 2rem;
    margin-bottom : 15px;
  }

  .description
  {
    margin: 30px auto;
    width : 40%;
  }

  button
  {
    padding : 15px 100px;
    background : black;
    color : white;
  }
`;

function Description( props )
{
  const [ readMore, setReadMore ] = useState( false );

  return(
    <DescriptionDiv>
        <h3 className = "title"> { props.title } </h3>
        <h4 className = "date"> { props.date } </h4>
        <br/>
        <br/>
        <p className = "description"> { readMore ? props.explanation : props.explanation.substring( 0, 80 ) + "..." } </p>
        <button onClick = { e => setReadMore( !readMore ) }> { readMore ? "Read Less..." : "Read More..." } </button>
    </DescriptionDiv>
  )
}

Description.defaultProps =
{
  title       : "We Hope You Enjoy!",
  date        : Date().toLocaleString(),
  explanation : ""
};

Description.propTypes = 
{
  title       : PropTypes.string,
  date        : PropTypes.string,
  explanation : PropTypes.string
};

export default Description;