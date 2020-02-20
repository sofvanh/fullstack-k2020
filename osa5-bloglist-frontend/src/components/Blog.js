import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Blog = ({ blog, likeAction, deleteAction, isOwned }) => {
  const [expanded, setExpanded] = useState(false)

  const hideWhenExpanded = { display: expanded ? 'none' : '' }
  const showWhenExpanded = { display: expanded ? '' : 'none' }

  const toggleExpanded = () => {
    setExpanded(!expanded)
  }

  const showDelete = { display: isOwned(blog) ? '' : 'none' }

  return (
    <div className="blog">
      <b>{blog.title}</b>, {blog.author}
      <div style={hideWhenExpanded}>
        <button onClick={toggleExpanded}>view</button>
      </div>
      <div style={showWhenExpanded}>
        <button onClick={toggleExpanded}>hide</button>
        <br />
        {blog.url}
        <br />
        Likes: {blog.likes} <button onClick={() => likeAction(blog)}>like</button>
        <br />
        {blog.user.name}
        <br />
        <div style={showDelete}>
          <button onClick={() => deleteAction(blog)}>delete</button>
        </div>
      </div>
    </div>
  )
}

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  likeAction: PropTypes.func.isRequired,
  deleteAction: PropTypes.func.isRequired,
  isOwned: PropTypes.func.isRequired
}

export default Blog