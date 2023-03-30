import React from 'react'
import { Stack, CircularProgress, LinearProgress } from '@mui/material'

function MuiProgressBar() {
    return (<>
        <Stack spacing={2} direction='row'>
            <CircularProgress color='error' />
            <CircularProgress color='secondary' />
            <CircularProgress color='warning' />
            <CircularProgress color='inherit' />
            <CircularProgress variant='determinate' color='error' value={70} />
            <CircularProgress variant='determinate' color='secondary' value={100} />

        </Stack>
        <Stack spacing={1} direction='column'>
            <LinearProgress />
            <LinearProgress color='success' />

        </Stack>

    </>
    )
}

export default MuiProgressBar