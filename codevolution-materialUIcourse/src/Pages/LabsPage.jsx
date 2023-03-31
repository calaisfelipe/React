import React from 'react'
import { Stack } from '@mui/material'
import MuiDataPicker from '../components/MuiDataPicker'
import MuiTabs from '../components/MuiTabs'
import MuiTimeLine from '../components/MuiTimeLine'
import MuiMansory from '../components/MuiMansory'


function LabsPage() {
  return (
    <Stack p={2} spacing={2} direction='column' justifyContent='center' alignItems='center'>
        <MuiDataPicker />
        <MuiTabs />
        <MuiTimeLine />
        <MuiMansory />

       


    </Stack>
  )
}

export default LabsPage