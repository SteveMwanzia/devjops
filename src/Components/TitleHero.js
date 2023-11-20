import React from 'react'
import Icon from "../designs/bars.png"

const TitleHero = () => {
  const hero = {
    display: "flex",
    justifyContent: "space-between",
    paddingLeft: "150px",
    width:"1530px",
    height:"130px",
  }
  return (
    <div className='hero' style= {hero}>
        <h1> devjobs </h1>
        <img  src={Icon} alt='Memu Icon'/>
    </div>
  )
}

export default TitleHero