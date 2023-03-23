import React from 'react'
import { Stack, Button, IconButton} from "@mui/material"
import StarIcon from '@mui/icons-material/Star'
import SendIcon from '@mui/icons-material/Send'




function MuiButton({action}) {
  return (
    <>
    <Stack spacing={2} direction='row'>
        
    <Button onClick={action} variant='contained' color='primary' href='https://google.com' target='_blank' >Contained</Button>

    <Button onClick={action} variant='outlined' color='secondary' >outlined</Button>

    <Button onClick={action} variant='text' color='warning'>text</Button>


    </Stack >
<hr />
    <Stack spacing={1} direction='row'>
    <Button variant='contained' color='primary' disabled> primary</Button>
    <Button variant='contained' color='secondary' > secondary</Button>
    <Button variant='contained' color='error'> error </Button>
    <Button variant='contained' color='warning' endIcon={<StarIcon htmlColor='yellow' fontSize='large'/>}> warning</Button>

    <Button variant='contained' color='info' startIcon={<SendIcon htmlColor='black' fontSize='large' />}> info</Button>



    <Button variant='contained' color='success'> success</Button>
    </Stack>
    <hr />

    <Stack spacing={1} direction='row' display='block'>

    <Button variant='outlined' color='primary'> primary</Button>
    <Button variant='outlined' color='secondary'> secondary</Button>
    <Button variant='outlined' color='error'> error </Button>
    <Button variant='outlined' color='warning'> warning</Button>
    <Button variant='outlined' color='info'> info</Button>
    <Button variant='outlined' color='success'> success</Button>
    </Stack>
    <hr />
    <Stack spacing={1} direction='row'>
    <Button variant='contained' color='warning' size='small'> small</Button>
    <Button variant='contained' color='info' size='medium'> medium</Button>
    <Button variant='contained' color='success' size='large'> large</Button>
    </Stack>
    <hr/>
    <Stack direction='row'>
        <IconButton onClick={action}><StarIcon htmlColor='#007bff' fontSize='large'/></IconButton>    


    </Stack>


    </>
  )
}

export default MuiButton