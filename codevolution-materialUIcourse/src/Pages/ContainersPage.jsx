import React from 'react'
import { Stack } from '@mui/material'
import MuiBox from '../components/MuiBox'
import MuiStack from '../components/MuiStack'
import MuiGrid from '../components/MuiGrid'
import MuiPaper from '../components/MuiPaper'
import MuiCard from '../components/MuiCard'

function ContainersPage() {
  return (
    <Stack spacing={2} marginTop={2} direction='column' p={2}>

        <MuiBox />
        <MuiStack />
        <MuiGrid />
        <MuiPaper />
        <MuiCard />
        

    </Stack>
  )
}

export default ContainersPage