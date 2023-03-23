import React from 'react'
import {Typography} from '@mui/material'


function MuiTypografy({children}) {
  return (
    <Typography variant='h6'>
        {children}
    </Typography>
  )
}

export default MuiTypografy