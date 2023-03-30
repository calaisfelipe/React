import React from 'react'
import { Stack } from '@mui/material'
import MuiAlert from '../components/MuiAlert'
import MuiSnackBars from '../components/MuiSnackBars'
import MuiDialog from '../components/MuiDialog'
import MuiProgressBar from '../components/MuiProgressBar'
import MuiSkeleton from '../components/MuiSkeleton'

function FeedbackPage() {
  return (
    <Stack spacing={2} direction='column' p={2}>

            <MuiAlert />
            <MuiSnackBars />
            <MuiDialog />
            <MuiProgressBar />
            <MuiSkeleton />




    </Stack>
  )
}

export default FeedbackPage