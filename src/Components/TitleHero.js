import React from 'react'
import Icon from "../designs/Group 10.png"

const TitleHero = () => {
  const hero = {
    display: "flex",
    justifyContent: "space-between",
    paddingLeft: "150px",
    backgroundImage: "url('../designs/Group 10.png'), cover",
    backgroundSize:"cover"
  }
  return (
    <div style= {hero}>
        <h1> devjobs </h1>
        <img src={Icon} alt='Memu Icon'/>
    </div>
  )
}

export default TitleHero