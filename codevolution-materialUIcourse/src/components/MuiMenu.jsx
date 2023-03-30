import React, { useState } from 'react'
import {Menu, MenuItem, Box, IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';

function MuiMenu() {
    const [status, setStatus] = useState(null)

    const open = Boolean(status)

    //função para abrir o menu
    const handleClick = (e) => {
        setStatus(e.target)

    }


    // função para fechar o menu    
    const handleClose = () => {
        setStatus(null)
    }

    return (
        <Box>

            <IconButton
                id='basic-button'
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup='true'
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}

            >
                <MenuIcon color='primary'  /> MENU
            </IconButton>

            <Menu
                id='basic-menu'
                anchorEl={status}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button'
                }}

            >

                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>

            </Menu>



        </Box>

    )
}

export default MuiMenu