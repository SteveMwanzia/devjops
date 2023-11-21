import React from 'react'
import Icon from "../designs/bars.png"

const TitleHero = () => {
  const hero = {
    display: "flex",
    justifyContent: "space-between",
    paddingLeft: "150px",
    paddingRight: "250px",
    width:"100%",
    height:"130px",
  }
  return (
    <div className='hero' style= {hero}>
        <h1> devjobs </h1>
        <img style = {{width: "30px", height: "30px", marginTop: "25px"}} src={Icon} alt='Memu Icon'/>
    </div>
  )
}

export default TitleHero