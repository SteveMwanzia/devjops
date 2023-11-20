import React from 'react'

const Button = () => {
  const btn = {
    backgroundColor: "hsl(235, 69%, 62%)",
    border: "none",
    borderRadius: "10px",
    width: "141px",
    height: "48px",
    marginBottom: "100px",
    marginTop: "50px",
    color: "white",
    fontSize: "15px"
  }
  return (
    <div>
        <button style = {btn}> Load More</button>
    </div>
  )
}

export default Button