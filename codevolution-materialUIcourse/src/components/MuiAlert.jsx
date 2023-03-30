import React, { useState } from 'react'
import { Stack, Alert, IconButton, AlertTitle, Button } from '@mui/material'
import InfoIcon from '@mui/icons-material/Info';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import ReportIcon from '@mui/icons-material/Report';
import CheckCircle from '@mui/icons-material/CheckCircle';

function MuiAlert() {
    const [alertType, setAlertType] = useState('')

    function handleAlert(type) {

        setAlertType(type)

    }

    function handleClose(){
        console.log('fechou')
    }

    return (
        <>
            <Stack spacing={2} width='100%' >

                {alertType !== '' && alertType && <Alert severity={alertType} onClose={handleClose}> this is an {alertType} Alert </Alert>}

                {alertType !== '' && alertType && <Alert variant='outlined' severity={alertType} onClose={handleClose}> this is an {alertType} Alert </Alert>}

                {alertType !== '' && alertType && <Alert variant='filled' severity={alertType} onClose={handleClose}> this is an {alertType} Alert </Alert>}

                {alertType !== '' && alertType &&
                    <Alert variant='outlined' severity={alertType} onClose={handleClose}>
                        <AlertTitle>{alertType}</AlertTitle>
                        this is an {alertType} Alert - <strong>Check it out!</strong> </Alert>}



            </Stack>
            <Stack spacing={2} direction='row'>

                <IconButton onClick={() => handleAlert('info')}><InfoIcon color='info' /></IconButton>
                <IconButton onClick={() => handleAlert('warning')}><ReportProblemIcon color='warning' /></IconButton>
                <IconButton onClick={() => handleAlert('error')}><ReportIcon color='error' /></IconButton>
                <IconButton onClick={() => handleAlert('success')}><CheckCircle color='success' /></IconButton>

                {alertType !== '' && <Button variant='contained' color='inherit' onClick={() => handleAlert('')}>Close Alerts</Button>}





            </Stack>
        </>
    )
}

export default MuiAlert