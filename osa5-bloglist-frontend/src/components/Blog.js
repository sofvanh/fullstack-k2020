import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Button, BlogDiv } from '../styles/Style'

const Blog = ({ blog, likeAction, deleteAction, isOwned }) => {
  const [expanded, setExpanded] = useState(false)

  const hideWhenExpanded = { display: expanded ? 'none' : '' }
  const showWhenExpanded = { display: expanded ? '' : 'none' }

  const toggleExpanded = () => {
    setExpanded(!expanded)
  }

  const showDelete = { display: isOwned(blog) ? '' : 'none' }

  return (
    <BlogDiv>
      <b>{blog.title}</b>, {blog.author}
      <div style={hideWhenExpanded}>
        <Button onClick={toggleExpanded}>view</Button>
      </div>
      <div style={showWhenExpanded}>
        <Button onClick={toggleExpanded}>hide</Button>
        <br />
        {blog.url}
        <br />
        Likes: {blog.likes} <Button onClick={() => likeAction(blog)}>like</Button>
        <br />
        {blog.user.name}
        <br />
        <div style={showDelete}>
          <Button onClick={() => deleteAction(blog)}>delete</Button>
        </div>
      </div>
    </BlogDiv>
  )
}

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  likeAction: PropTypes.func.isRequired,
  deleteAction: PropTypes.func.isRequired,
  isOwned: PropTypes.func.isRequired
}

export default Blog