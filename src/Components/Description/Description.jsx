import React, { useState, useEffect } from "react"


function Description( props )
{
  const [ readMore, setReadMore ] = useState( false );

  return(
    <div className = "descriptionContainer">
        <h3 className = "title"> { props.title } </h3>
        <h4 className = "date"> { props.date } </h4>
        <br/>
        <br/>
        <p className = "description"> { readMore ? props.explanation : props.explanation.substring( 0, 20 ) } </p>
        <button onClick = { e => setReadMore( !readMore ) }> { readMore ? "Read Less..." : "Read More..." } </button>
    </div>
  )
}

export default Description;