import React from 'react'
import {Stack } from '@mui/material'

import MuiButton from '../components/MuiButton'
import MuiButtonGroup from '../components/MuiButtonGroup'
import MuiToggleButton from '../components/MuiToggleButton'
import MuiLoadingButton from '../components/MuiLoadingButton'

function ButtonPage() {
  return (
    <Stack p={2} spacing={2}>
        <MuiButton />
        
        <MuiButtonGroup />
        
        <MuiToggleButton />

        <MuiLoadingButton />



    </Stack>
  )
}

export default ButtonPage
