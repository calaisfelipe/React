import React, {useState} from 'react'
import { Stack } from '@mui/material'
import {LoadingButton} from '@mui/lab'
import SaveIcon from '@mui/icons-material/Save';

function MuiLoadingButton() {
    const [status, setStatus] = useState(false)

    function handleLoading(){
        setStatus(!status)
    }

  return (
    <Stack spacing={2} direction='row'>
        
        <LoadingButton loading={status} variant='outlined' onClick={handleLoading} >Submit</LoadingButton>

        <LoadingButton loading={status}  loadingIndicator='Loading...' variant='outlined' onClick={handleLoading}>Fetch Data</LoadingButton>

        <LoadingButton loading={status} loadingPosition='start' startIcon={<SaveIcon />} variant='outlined' onClick={handleLoading}>Save</LoadingButton>
        



    </Stack>
  )
}

export default MuiLoadingButton