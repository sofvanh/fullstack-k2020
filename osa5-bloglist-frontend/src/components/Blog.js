import React from 'react'

const Blog = ({ blog }) => {
  return (
    <p>
      <b>{blog.title}</b>, {blog.author}
    </p>
  )
}

export default Blog