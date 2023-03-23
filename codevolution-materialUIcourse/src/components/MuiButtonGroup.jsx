import React from 'react'
import { Stack, ButtonGroup, Button } from "@mui/material";


function MuiButtonGroup() {
  return (
    <Stack direction='row' spacing={2}>

   
    <ButtonGroup variant='contained' color='secondary' orientation='vertical' aria-label='count botton group' >
        <Button>one</Button>
        <Button>two</Button>
        <Button>three</Button>
    </ButtonGroup>

    <ButtonGroup variant='outlined' color='error' size='small' aria-label='count botton group'>
        <Button>four</Button>
        <Button>five</Button>
        <Button>six</Button>
    </ButtonGroup>

    </Stack>

    


  )
}

export default MuiButtonGroup