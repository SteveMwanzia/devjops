import React from 'react'

const JobListItems = ({post}) => {
  const cont = {
    padding: "10px",
    width: "300px",
    marginBottomTop: "start",
    background: "white",
    textAlign: "start",
    borderRadius:"10px"
  }
  return (
    <div className='Content' style = {cont}>
        <img src={post.logo} alt='company logo'/>
        <p style ={{color: "#6e8098"}}>{post.postedAt} . {post.contract}</p>
        <h3>{post.position}</h3>
        <p style ={{color: "#6e8098"}} >{post.company}</p>
        <p style= {{color: "#5964e0", marginTop: "30px"} }>{post.location}</p>
    </div>
  )
}

export default JobListItems