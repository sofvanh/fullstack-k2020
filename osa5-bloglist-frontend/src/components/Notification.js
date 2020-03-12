import React from 'react'
import { Notice } from '../styles/Style'

const Notification = ({ message }) => {
  if (message === null) {
    return null
  }

  return (
    <Notice>
      {message}
    </Notice>
  )
}

export default Notification