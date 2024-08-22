import React from 'react'
import { useContext } from 'react'
import UserContext from '../Contexts/UserContext'


function Profile() {
  const {user} = useContext(UserContext);
  return (
    <div>
      <h1>Profile</h1>
      <h3>Username: {user.username}</h3>
      <h3>Password: {user.password}</h3>
    </div>
  )
}

export default Profile
