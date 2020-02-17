import React, { useState, useEffect } from 'react'
import Blog from './components/Blog'
import Notification from './components/Notification'
import LoginForm from './components/LoginForm'
import blogService from './services/blogs'
import loginService from './services/login'
import './App.css'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [user, setUser] = useState(null)
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [url, setUrl] = useState('')
  const [added, setAdded] = useState(0)
  const [notification, setNotification] = useState(null)

  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs(blogs)
    )
  }, [added])

  useEffect(() => {
    const loggedUserJSON =window.localStorage.getItem('loggedUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      blogService.setToken(user.token)
    }
  }, [])

  const handleLogin = async (username, password) => {
    try {
      const user = await loginService.login({
        username, password,
      })

      setUser(user)
      blogService.setToken(user.token)
      window.localStorage.setItem('loggedUser', JSON.stringify(user))
    } catch (exception) {
      setNotification(
        `Login failed: ${exception.response.data.error}`
      )
      setTimeout(() => {
        setNotification(null)
      }, 5000)
    }
  }

  const handleNewBlog = async(event) => {
    event.preventDefault()
    try {
      const blog = {
        author: author,
        title: title,
        url: url
      }

      await blogService.create(blog)

      setAuthor('')
      setTitle('')
      setUrl('')
      setAdded(added + 1)
    } catch (exception) {
      setNotification(
        `Couldn't add blog: ${exception.response.data.error}`
      )
      setTimeout(() => {
        setNotification(null)
      }, 5000)
    }
  }

  const logout = () => {
    setUser(null)
    blogService.setToken("")
    window.localStorage.removeItem('loggedUser')
    setNotification(
      `Logged out!`
    )
    setTimeout(() => {
      setNotification(null)
    }, 5000)
  }

  const blogForm = () => (
    <form onSubmit={handleNewBlog}>
      <div>
        title 
        <input
        type="text"
        value={title}
        onChange={({ target }) => setTitle(target.value)}/>
      </div>
      <div>
        author 
        <input
        type="text"
        value={author}
        onChange={({ target }) => setAuthor(target.value)}/>
      </div>
      <div>
        url 
        <input
        type="text"
        value={url}
        onChange={({ target }) => setUrl(target.value)}/>
      </div>
      <button type="submit">Add</button>
    </form>
  )

  const blogsList = () => (
    <div>
      <h2>Blogs</h2>
      {blogs.map(blog =>
        <Blog key={blog.id} blog={blog} />
      )}
    </div>
  )

  return (
    <div>
      <Notification message={notification}/>
      {user === null ?
        <LoginForm loginAction={handleLogin}/> :
        <div>
          <p>Welcome {user.name}!</p>
          <button onClick={logout}>Logout</button>
          {blogsList()}
          {blogForm()}
        </div>
      }
    </div>
  )
}

export default App