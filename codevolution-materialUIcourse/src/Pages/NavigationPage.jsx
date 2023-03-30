import React from 'react'
import { Stack } from '@mui/material'
import MuiNavbar from '../components/MuiNavbar'
import MuiMenu from '../components/MuiMenu'
import MuiLink from '../components/MuiLink'
import MuiBreadcrumbs from '../components/MuiBreadcrumbs'
import MuiDrawer from '../components/MuiDrawer'
import MuiSpeedDial from '../components/MuiSpeedDial'
import MuiBottomNavigation from '../components/MuiBottomNavigation'

function NavigationPage() {
  return (
    <Stack  direction='column' spacing={2}>
        <MuiNavbar />
        <MuiMenu />
        <MuiLink />
        <MuiBreadcrumbs />
        <MuiDrawer />
        <MuiSpeedDial />
        <MuiBottomNavigation />


    </Stack>
  )
}

export default NavigationPage