import React from 'react'
import { useAuth } from '../context/Auth'
import Login from '../components/Login'
import { useNavigate } from 'react-router-dom'




function Profile() {
  const navigate  = useNavigate()
  const auth = useAuth()

  function handleLogOut(){

    auth.logout()
    navigate('/')


  }

  return (
    <div>Profile
      

      {!auth.user && <Login />}
      
      {auth.user && <div>Welcome {auth.user}</div>}
      {auth.user && (<button onClick={handleLogOut}>LogOut</button>)}



    </div>
  )
}

export default Profile