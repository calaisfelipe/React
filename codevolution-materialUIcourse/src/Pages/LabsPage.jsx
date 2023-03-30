import React from 'react'
import { Stack } from '@mui/material'
import MuiDataPicker from '../components/MuiDataPicker'
import MuiTabs from '../components/MuiTabs'


function LabsPage() {
  return (
    <Stack p={2} spacing={2} direction='column'>
        <MuiDataPicker />
        <MuiTabs />
       


    </Stack>
  )
}

export default LabsPage