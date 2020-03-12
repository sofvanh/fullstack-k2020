import React, { useState } from 'react'
import { Button, Input } from '../styles/Style'

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
        <Input
          id='title'
          type="text"
          value={title}
          onChange={({ target }) => setTitle(target.value)} />
      </div>
      <div>
        Author:
        <Input
          id='author'
          type="text"
          value={author}
          onChange={({ target }) => setAuthor(target.value)} />
      </div>
      <div>
        Url:
        <Input
          id='url'
          type="text"
          value={url}
          onChange={({ target }) => setUrl(target.value)} />
      </div>
      <Button type="submit">Add</Button>
    </form>
  )
}

export default BlogForm