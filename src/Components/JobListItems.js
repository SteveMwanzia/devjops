import React from 'react'

const JobListItems = ({post}) => {
  return (
    <div className='Content'>
        <img src={post.logo}/>
        <p>{post.postedAt} . {post.contract}</p>
        <h2>{post.position}</h2>
        <p>{post.company}</p>
        <p>{post.location}</p>
    </div>
  )
}

export default JobListItems