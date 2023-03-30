import React from 'react'
import {Link, Stack} from '@mui/material'

function MuiLink() {
  return (
    <Stack spacing={2} direction='row' justifyItems='center'
    alignItems='center'>

        <Link href='#' color='secondary' underline='hover'>Link 1</Link>
        
        <Link href='#' color='error' underline='none' variant='button'>Link 2</Link>

        <Link href='#' color='inherit' variant='overline'>Link 3</Link>

        <Link href='#' variant='h5'>Link 4</Link>

        <Link href='#' sx={{color:'#222'}} variant='subtitle1'>Link 5</Link>



        
    </Stack>
  )
}

export default MuiLink