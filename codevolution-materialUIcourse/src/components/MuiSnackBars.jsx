import React, {useState} from 'react'
import { Stack, Snackbar, Button, Alert } from '@mui/material'

function MuiSnackBars() {
    const [open, setOpen] = useState(false)

    function handleClick(){

        setOpen(!open)
    }

    function handleClose(){
        setOpen(false)
    }
    
  return (
    <Stack>
        <Button variant='contained' color='secondary' onClick={handleClick}>Open/Close Snackbar</Button>

        <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}

        >
            <Alert severity='success' variant='filled'>
                Sucesso !!
            </Alert>

        </Snackbar>


    </Stack>
  )
}

export default MuiSnackBars