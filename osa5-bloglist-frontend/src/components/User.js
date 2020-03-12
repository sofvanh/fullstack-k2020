import React from 'react'

const User = ({ user }) => {
  console.log(user)
  return (
    <div>
      {user.name}, blogs: {user.blogs.length}
    </div>
  )
}

export default User