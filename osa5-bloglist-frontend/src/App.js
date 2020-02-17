import React, { useState, useEffect } from 'react'
import Blog from './components/Blog'
import Notification from './components/Notification'
import blogService from './services/blogs'
import loginService from './services/login'
import './App.css'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
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

  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      const user = await loginService.login({
        username, password,
      })

      setUser(user)
      blogService.setToken(user.token)
      setUsername('')
      setPassword('')
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

  const loginForm = () => (
    <form onSubmit={handleLogin}>
      <div>
        username
        <input
          type="text"
          value={username}
          name="Username"
          onChange={({ target }) => setUsername(target.value)} />
      </div>
      <div>
        password
              <input
          type="password"
          value={password}
          name="Password"
          onChange={({ target }) => setPassword(target.value)} />
      </div>
      <button type="submit">Login</button>
    </form>
  )

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
        loginForm() :
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