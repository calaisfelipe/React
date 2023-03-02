import React from 'react'
import {NavLink} from 'react-router-dom'
import styles from './Navbar.module.css'

const navLinkStyles = ({isActive}) => {


        return{
            color: isActive ? 'red' : 'black'
        }
}


function Navbar({title}) {
  return (

    <nav className={styles.navbarContainer}>

        <h2>{title}</h2>
        <div className={styles.linkContainer}>
            <NavLink style={navLinkStyles} to='/'>Home</NavLink>
            <NavLink style={navLinkStyles} to='/products'>Products</NavLink>
            <NavLink style={navLinkStyles} to='/about'>About</NavLink>

            <NavLink  to='https://www.google.com.br/' target='_blank'>Google</NavLink>

        </div>

    </nav>
  )
}

export default Navbar