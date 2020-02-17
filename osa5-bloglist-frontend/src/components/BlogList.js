import React from 'react'
import Blog from './Blog'

const BlogList = ({ blogs, likeAction, deleteAction, isOwned }) => {
  return (
    <div>
      <h2>Blogs</h2>
      {blogs.map(blog =>
        <Blog
          key={blog.id}
          blog={blog}
          likeAction={likeAction}
          deleteAction={deleteAction}
          isOwned={isOwned}
        />
      )}
    </div>
  )
}

export default BlogList