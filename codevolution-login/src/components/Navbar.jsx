import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../context/Auth'


import styles from './Navbar.module.css'

function Navbar() {
  const auth = useAuth()

    const currentLink = ({isActive}) =>{
        return { color: isActive ? '#fff' : '' }

    }

  return (

    <nav className={styles.navbarContainer}>
        <h2>CodeVolution</h2>
        <ul>
            <li><NavLink style={currentLink} to='/' >Home</NavLink></li>
            <li><NavLink style={currentLink} to='profile' >Profile</NavLink></li>

            {!auth.user ? (<li><NavLink style={currentLink} to='login' >Login</NavLink></li>) : '' }
            
           
        </ul>

    </nav>
  )
}

export default Navbar