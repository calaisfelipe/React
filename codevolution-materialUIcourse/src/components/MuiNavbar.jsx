import React from 'react'
import { AppBar, Toolbar, Box ,IconButton, Typography, Button, Stack, Link } from '@mui/material'
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import MuiMenu from './MuiMenu';

function MuiNavbar() {
  return (
    <Box>
        <AppBar position='static' >
            <Toolbar>
                
                <IconButton size='large' edge='start' color='inherit' sx={{mr: 1}}>

                    <CatchingPokemonIcon />

                </IconButton>
                <Typography variant='h5' sx={{flexGrow: 1}}>Pokemon APP</Typography>

            <Stack direction='row' spacing={2} alignItems='center' justifyContent='center'>

                <Link href='#' color='inherit' underline='none'>Home</Link>

                <Link href='#' color='inherit' underline='none'>About Us</Link>

                <Link href='#' color='inherit' underline='none'>Features</Link>

                <Button variant='text' color='inherit'  >Login</Button>
            </Stack>

                
            </Toolbar>

        </AppBar>




    </Box>
  )
}

export default MuiNavbar