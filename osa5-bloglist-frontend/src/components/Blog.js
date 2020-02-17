import React from 'react'

const Blog = ({ blog }) => {
    console.log(blog)
    return(
        <p>
            {blog.title}, {blog.author}
        </p>
    )
}

export default Blog