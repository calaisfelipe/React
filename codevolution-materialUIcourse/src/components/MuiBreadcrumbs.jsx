import React from 'react'
import { Stack, Breadcrumbs, Link } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';


function MuiBreadcrumbs() {
  return (
    <Stack spacing={2} direction='column'>
        <Breadcrumbs aria-label='breadcrumb'>
        <Link href='#' underline='none' color='primary' variant='button'>BreadCrumbs</Link>
        <Link href='#' underline='none' color='primary' variant='button'>Home</Link>
        <Link href='#' underline='none' color='primary' variant='button'>About Us</Link>
        </Breadcrumbs>

        <Breadcrumbs separator={<NavigateNextIcon fontSize='small'/>}>
        <Link href='#' sx={{display: 'flex', alignItems: 'center'}} underline='none' color='primary' variant='button'> <HomeIcon sx={{mr: 0.5}} fontSize='small'/> Home </Link>

        <Link href='#' sx={{display: 'flex', alignItems: 'center'}} underline='none' color='primary' variant='button'> <WhatshotIcon sx={{mr: 0.5}} fontSize='small'/> Page1</Link>

        <Link href='#' underline='none' color='inherit' variant='button'>Page2</Link>
        </Breadcrumbs>

        <Breadcrumbs separator={<NavigateNextIcon fontSize='small'/>} maxItems={1} itemsBeforeCollapse={1}>
        <Link href='#' sx={{display: 'flex', alignItems: 'center'}} underline='none' color='primary' variant='button'> <HomeIcon sx={{mr: 0.5}} fontSize='small'/> Home </Link>

        <Link href='#' sx={{display: 'flex', alignItems: 'center'}} underline='none' color='primary' variant='button'> <WhatshotIcon sx={{mr: 0.5}} fontSize='small'/> Page1</Link>

        <Link href='#' underline='none' color='inherit' variant='button'>Page2</Link>
        <Link href='#' underline='none' color='inherit' variant='button'>Page3</Link>

        </Breadcrumbs>


    </Stack>
  )
}

export default MuiBreadcrumbs