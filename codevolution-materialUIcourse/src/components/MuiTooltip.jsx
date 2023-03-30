import React from 'react'
import {Stack, Tooltip, IconButton, Fade, Zoom} from '@mui/material'
import PersonIcon from '@mui/icons-material/Person';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
function MuiTooltip() {
  return (
    <Stack spacing={2} direction='row'>

        <Tooltip 
        TransitionComponent={Zoom}
        TransitionProps={{ timeout: 1000 }}
        title='ZOOM'>
            <IconButton>
            <PersonIcon />
            </IconButton>
        </Tooltip>

        <Tooltip 
        TransitionComponent={Fade}
        TransitionProps={{ timeout: 700 }}
        title='Fade'
        placement='right-end'
        arrow>
            <IconButton>
            <HighlightOffIcon />
            </IconButton>
        </Tooltip>




    </Stack>
  )
}

export default MuiTooltip