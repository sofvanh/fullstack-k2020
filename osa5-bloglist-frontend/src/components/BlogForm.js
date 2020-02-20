import React, { useState } from 'react'

const BlogForm = ({ createAction }) => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [url, setUrl] = useState('')

  const onSubmit = (event) => {
    event.preventDefault()
    createAction(title, author, url)
    setTitle('')
    setAuthor('')
    setUrl('')
  }

  return (
    <form onSubmit={onSubmit}>
      <div>
        Title:
        <input
          type="text"
          value={title}
          onChange={({ target }) => setTitle(target.value)} />
      </div>
      <div>
        Author:
        <input
          type="text"
          value={author}
          onChange={({ target }) => setAuthor(target.value)} />
      </div>
      <div>
        Url:
        <input
          type="text"
          value={url}
          onChange={({ target }) => setUrl(target.value)} />
      </div>
      <button type="submit">Add</button>
    </form>
  )
}

export default BlogForm