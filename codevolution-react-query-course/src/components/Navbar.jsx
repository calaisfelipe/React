import React, {useState} from 'react'
import { Box, Toolbar, AppBar, IconButton, Button, Typography, MenuItem, Menu } from '@mui/material'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
  const [open, setOpen] = useState(false)

  function handleOpenMenu(){

    setOpen(!open)
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar >

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            React Query Course
          </Typography>

          <Box sx={{
            flexGrow: 1, display: {
              xs: 'none',
              sm: 'flex'

            }
          }}>

            <MenuItem ><Link className={styles.linkNav} to='/'>App</Link></MenuItem>
            <MenuItem ><Link className={styles.linkNav} to='/home'>Home</Link></MenuItem>
            <MenuItem><Link className={styles.linkNav} to='/superheroes'>SuperHeroes</Link></MenuItem>
            <MenuItem><Link className={styles.linkNav} to='/rqsuperheroes'>RQSuperHeroes</Link></MenuItem>
            <MenuItem><Link className={styles.linkNav} to='/parallel'>Parallel</Link></MenuItem>
            <MenuItem><Link className={styles.linkNav} to='/dinamicparallel'>Dinamic Parallel</Link></MenuItem>
            <MenuItem><Link className={styles.linkNav} to='/dependent'>Dependent Queries</Link></MenuItem>
            <MenuItem><Link className={styles.linkNav} to='/paginated'>Paginated</Link></MenuItem>
            <MenuItem><Link className={styles.linkNav} to='/infinity'>Infinity</Link></MenuItem>
          </Box>

          
          <IconButton onClick={handleOpenMenu}
          sx={{display:{
            xs:'block',
            sm:'none'
          }}}>
            <MenuIcon />
          </IconButton>
          
          
          <Menu 
          open={open}
          onClose={() => setOpen(false)}
          sx={{
            display: {
              xs: 'block',
              md: 'none'
            }
          }}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          
          >

            <MenuItem  onClick={() => setOpen(false)}><Link className={styles.linkNavMenu} to='/'>App</Link></MenuItem>
            <MenuItem onClick={() => setOpen(false)}><Link className={styles.linkNavMenu} to='/home'>Home</Link></MenuItem>
            <MenuItem onClick={() => setOpen(false)}><Link className={styles.linkNavMenu} to='/superheroes'>SuperHeroes</Link></MenuItem>
            <MenuItem onClick={() => setOpen(false)}><Link className={styles.linkNavMenu} to='/rqsuperheroes'>RQSuperHeroes</Link></MenuItem>
            <MenuItem onClick={() => setOpen(false)}><Link className={styles.linkNavMenu} to='/parallel'>Parallel</Link></MenuItem>
            <MenuItem onClick={() => setOpen(false)}><Link className={styles.linkNavMenu} to='/dinamicparallel'>Dinamic Parallel</Link></MenuItem>
            <MenuItem onClick={() => setOpen(false)}><Link className={styles.linkNavMenu} to='/dependent'>Dependent Queries</Link></MenuItem>
            <MenuItem onClick={() => setOpen(false)}><Link className={styles.linkNavMenu} to='/paginated'>Paginated</Link></MenuItem>
            <MenuItem onClick={() => setOpen(false)}><Link className={styles.linkNavMenu} to='/infinity'>Infinity</Link></MenuItem>

          </Menu>



        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar