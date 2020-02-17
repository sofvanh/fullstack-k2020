import React from 'react'
import Blog from './Blog'

const BlogList = ({ blogs, likeAction, deleteAction }) => {
  return (
    <div>
      <h2>Blogs</h2>
      {blogs.map(blog =>
        <Blog
          key={blog.id}
          blog={blog}
          likeAction={likeAction}
          deleteAction={deleteAction}
        />
      )}
    </div>
  )
}

export default BlogList