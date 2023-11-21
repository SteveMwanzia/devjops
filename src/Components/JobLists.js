import React from 'react'
import data from "../data/data.json"
import JobListItems from './JobListItems'

function JobLists() {
  const gridstyle = {
    display: "grid",
    justifyContent:"center",
    alignContent:"center",
    gridTemplateColumns: "33% 33% 33%",
    gap: "2rem",
    backgroundColor: "#f4f6f8",
    padding: "100px 200px",
    margin: "auto" ,
    
  }
  return (
    <div>
      <div style={gridstyle}>
        {data.map(post=>(<JobListItems key={post.id} post={post}/>))}
      </div>
    </div>
    
  )
}

export default JobLists