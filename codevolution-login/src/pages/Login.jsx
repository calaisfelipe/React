import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/Auth'


import styles from './Login.module.css'

function Login() {
    const [user,setUser] = useState('')
    const [password,setPassword] = useState('')
    const navigate = useNavigate()
    const auth = useAuth()


    function handleLogin() {

        auth.logIn(user,password)
        navigate('/profile', {replace: true})
        

    }

    return (
        <div className={styles.loginContainer}>

            <div className={styles.formContainer}>
                <label htmlFor="userId">
                    User: <input type="text" placeholder='Usuario' name='userId' id='userId' onChange={(e) => setUser(e.target.value)}/>
                </label>
                <label htmlFor="userPass">
                    password: <input type="password" name="userPass" id="userPass" placeholder='Senha' onChange={(e) => setPassword(e.target.value)} />
                </label>
                <div><button onClick={handleLogin} >Login</button></div>
            </div>


        </div>
    )
}

export default Login