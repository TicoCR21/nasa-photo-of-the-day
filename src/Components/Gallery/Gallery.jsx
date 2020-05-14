import React, { useEffect } from "react"

function Gallery( props )
{
  return(
    <div className = "gallery">
        <img src = { props.image } alt = "Provided by NASA" />
    </div>
  )
}

export default Gallery