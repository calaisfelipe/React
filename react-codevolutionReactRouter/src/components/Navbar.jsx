import React from 'react'
import {NavLink} from 'react-router-dom'
import styles from './Navbar.module.css'
import { useAuth } from '../context/Auth'

const navLinkStyles = ({isActive}) => {


        return{
            color: isActive ? 'red' : 'black'
        }
}


function Navbar({title}) {


  const auth = useAuth()


  return (

    <nav className={styles.navbarContainer}>

        <h2>{title}</h2>
        <div className={styles.linkContainer}>
            <NavLink style={navLinkStyles} to='/'>Home</NavLink>
            <NavLink style={navLinkStyles} to='/products'>Products</NavLink>
            <NavLink style={navLinkStyles} to='/about'>About</NavLink>

            <NavLink  to='/users'>Users</NavLink>
            <NavLink to='/profile'>Profile</NavLink>

            {!auth.user  && (<NavLink to='/login'>Login</NavLink>)}
        </div>

    </nav>
  )
}

export default Navbar