import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/Auth'

import Login from './Login'
import UserInfo from '../components/UserInfo'

function Profile() {
    const auth = useAuth()
    const navigate = useNavigate()


  function handleLogout(){

    auth.logOut()
    navigate('/', {replace: true})
    
  }

  return (
    <div>

    {!auth.user ? (<Login />) :  (<UserInfo name={auth.user} logout={handleLogout} />) }


    </div>
  )
}

export default Profile