import React from 'react'
import {Box, Stack} from '@mui/material'


const theme = {

}


function MuiBox() {
  return (
    <Stack spacing={2} direction='row'>
        
        <Box component='article' sx={
            {color: '#fff',
            backgroundColor: 'secondary.main', 
            width: '100px', 
            height: '100px',
            '&:hover':{
                backgroundColor: 'secondary.light'
            }
            
            }} > BOx</Box>

            <div style={{color: '#fff',
            backgroundColor: 'green', 
            width: '100px', 
            height: '100px'
            }}>normal div</div>


       


    </Stack>
  )
}

export default MuiBox