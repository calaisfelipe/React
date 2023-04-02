import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import { Stack, Box, Menu, MenuItem } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
//import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';

import styles from './Navbar.module.css'

import { Link as LinkRouter, useNavigate } from 'react-router-dom'


function Navbar() {
    const navigate = useNavigate()
    const [open, setOpen] = useState(false)

    return (
        <>
            <AppBar position="static" color='darker'>
                <Toolbar>
                    
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <LinkRouter className={styles.linkStyled} to='/'>Blog JsonPlaceholder API</LinkRouter>  
                    </Typography>

                    <Stack
                        direction='row'
                        spacing={2}
                        sx={{
                            display: {
                                xs: 'none',
                                sm: 'block'
                            }
                        }}>

                        <LinkRouter className={styles.linkStyled} to='/newpost'>Create Post</LinkRouter>
                        <LinkRouter className={styles.linkStyled} to='/'>Posts</LinkRouter>
                        <LinkRouter className={styles.linkStyled} to='/'>Settings</LinkRouter>
                    </Stack>

                    <Box
                        sx={{
                            display: {
                                xs: 'block',
                                sm: 'none'
                            }
                        }}>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu-mobile"
                            sx={{ mr: 2 }}
                            onClick={() => setOpen(!open)}
                        >
                            <MenuIcon />
                        </IconButton>

                        <Menu
                            open={open}
                            onClose={() => setOpen(false)}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                              }}
                              transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                              }}

                            >

                            <MenuItem onClick={() => setOpen(false)}><LinkRouter to='/newpost'>Create Post</LinkRouter></MenuItem>
                            <MenuItem onClick={() => setOpen(false)}><LinkRouter to='/'>Posts</LinkRouter></MenuItem>
                            <MenuItem onClick={() => setOpen(false)}><LinkRouter to='/'>Settings</LinkRouter></MenuItem>

                        </Menu>

                    </Box>




                </Toolbar>
            </AppBar>

        </>
    )
}

export default Navbar