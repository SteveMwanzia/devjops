import React from 'react'
import data from "../data/data.json"
import JobListItems from './JobListItems'

function JobLists() {
  const gridstyle = {
    display: "grid",
    backgroundColor: "grey"
  }
  return (
    <div style={gridstyle}>
        {data.map(post=>(<JobListItems key={post.id} post={post}/>))}
    </div>
  )
}

export default JobLists