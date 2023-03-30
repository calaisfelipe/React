import React from 'react'
import { Stack } from '@mui/material'
import MuiAcorddion from '../components/MuiAcorddion'
import MuiImageList from '../components/MuiImageList'




function ComplexComponentsPage() {
  return (
    
    <Stack p={2} spacing={4} direction='row'>

        <MuiAcorddion />
        <MuiImageList />
        
         
    </Stack>
        
    


    
  )
}

export default ComplexComponentsPage