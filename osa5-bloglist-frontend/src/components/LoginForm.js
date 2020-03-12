import React, { useState } from 'react'
import { Button, Input } from '../styles/Style'

const LoginForm = ({ loginAction }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const onSubmit = (event) => {
    event.preventDefault()
    loginAction(username, password)
    setUsername('')
    setPassword('')
  }

  return (
    <form onSubmit={onSubmit}>
      <div>
        Username:
        <Input
          id='username'
          type="text"
          value={username}
          name="Username"
          onChange={({ target }) => setUsername(target.value)} />
      </div>
      <div>
        Password:
        <Input
          id='password'
          type="password"
          value={password}
          name="Password"
          onChange={({ target }) => setPassword(target.value)} />
      </div>
      <Button id='login-button' type="submit">Login</Button>
    </form>
  )
}

export default LoginForm