import React from 'react'
import {Stack,} from '@mui/material'
import MuiAvatar from '../components/MuiAvatar'
import MuiBadge from '../components/MuiBadge'
import MuiList from '../components/MuiList'
import MuiChip from '../components/MuiChip'
import MuiTooltip from '../components/MuiTooltip'

function DataDisplayPage() {
  return (
    <Stack spacing={2} p={2} direction='column'>

        <MuiAvatar />
        <MuiBadge />
        <MuiList />
        <MuiChip />
        <MuiTooltip />





    </Stack>
  )
}

export default DataDisplayPage