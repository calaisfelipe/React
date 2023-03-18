import React from 'react'
import { NavLink } from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import { getCount, increaseCount } from '../features/posts/postsSlice'

import styles from './Navbar.module.css'

function Navbar() {
  const dispatch = useDispatch()
  const counter = useSelector(getCount)

    const navLinkStyle = ({isActive}) =>{
        return {color: isActive ? '#222' : '#fff'}
    } 


  return (
    <nav className={styles.navbarContainer}>
        <div>
            <h2 className={styles.homeTitle}>SuperDev Blog</h2></div>
           
        <div>
            <ul className={styles.navLinkContainer}>
                <li><NavLink to='/' style={navLinkStyle} >Home</NavLink></li>
                <li><NavLink to='/newpost' style={navLinkStyle} >Create Post</NavLink></li>
                <li><NavLink to='/about'   style={navLinkStyle} >about</NavLink></li> 
                <li><NavLink to='/user'   style={navLinkStyle} >Users</NavLink></li> 
                <li><button onClick={() => dispatch(increaseCount()) }>{counter}</button></li> 
                </ul>
                </div>
    </nav>
  )
}

export default Navbar