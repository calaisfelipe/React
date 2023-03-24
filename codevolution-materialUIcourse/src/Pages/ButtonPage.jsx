import React from 'react'
import {Stack } from '@mui/material'

import MuiButton from '../components/MuiButton'
import MuiButtonGroup from '../components/MuiButtonGroup'
import MuiToggleButton from '../components/MuiToggleButton'

function ButtonPage() {
  return (
    <Stack>
        <MuiButton />
        <hr/>
        <MuiButtonGroup />
        <hr/>
        <MuiToggleButton />



    </Stack>
  )
}

export default ButtonPage
