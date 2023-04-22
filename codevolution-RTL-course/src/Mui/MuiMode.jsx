import React from 'react'
import {useTheme} from '@mui/material/styles'
import { Typography, Stack } from '@mui/material'

function MuiMode() {
  
  const theme = useTheme()

    return (

    <Stack p={2} >
        <Typography component='h1'>
            {`${theme.palette.mode} Mode`}
        </Typography>


    </Stack>
  )
}

export default MuiMode