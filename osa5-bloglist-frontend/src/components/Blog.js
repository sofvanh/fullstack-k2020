import React, { useState } from 'react'

const Blog = ({ blog }) => {
  const [expanded, setExpanded] = useState(false)

  const hideWhenExpanded = { display: expanded ? 'none' : '' }
  const showWhenExpanded = { display: expanded ? '' : 'none' }

  const toggleExpanded = () => {
    setExpanded(!expanded)
  }

  return (
    <div className="blog">
      <p>
        <b>{blog.title}</b>, {blog.author}
        <div style={hideWhenExpanded}>
          <button onClick={toggleExpanded}>view</button>
        </div>
        <div style={showWhenExpanded}>
          <button onClick={toggleExpanded}>hide</button>
          <br />
          {blog.url}
          <br />
          Likes: {blog.likes} <button>like</button>
          <br />
          {blog.user.name}
        </div>
      </p>
    </div>
  )
}

export default Blog