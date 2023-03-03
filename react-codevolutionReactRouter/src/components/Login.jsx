import React from 'react'
import { useState } from 'react'
import { useAuth } from '../context/Auth'
import { useNavigate, useLocation } from 'react-router-dom'

function Login() {

    const [user, setUser] = useState('')
    const auth = useAuth()
    const navigate = useNavigate()
    const location = useLocation()

    const redirectPath = location.state?.path || '/'

    function handleLogin(){

       auth.login(user)
       navigate(redirectPath , {replace: true})

    }

  return (
    <div>
        <h2>Login</h2>
        <label htmlFor="username">
            Username: <input type="text" name="username" id="username" onChange={(e) => setUser(e.target.value)} />
        </label>
        <button onClick={handleLogin}>Login</button>


    </div>
  )
}

export default Login