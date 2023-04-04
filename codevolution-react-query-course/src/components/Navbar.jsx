import React from 'react'
import {Box, Toolbar, AppBar, IconButton, Button, Typography, MenuItem} from '@mui/material'
import {Link} from 'react-router-dom'
import styles from './Navbar.module.css'

function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              React Query Course
          </Typography>
          <MenuItem ><Link className={styles.linkNav} to='/'>App</Link></MenuItem>
          <MenuItem ><Link className={styles.linkNav} to='/home'>Home</Link></MenuItem>
          <MenuItem><Link className={styles.linkNav} to='/superheroes'>SuperHeroes</Link></MenuItem>
          <MenuItem><Link className={styles.linkNav} to='/rqsuperheroes'>RQSuperHeroes</Link></MenuItem>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar