import React from 'react'
import {Stack, SpeedDial, SpeedDialIcon, SpeedDialAction} from '@mui/material'
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';

function MuiSpeedDial() {

    const actions = [
        { icon: <FileCopyIcon />, name: 'Copy' },
        { icon: <SaveIcon />, name: 'Save' },
        { icon: <PrintIcon />, name: 'Print' },
        { icon: <ShareIcon />, name: 'Share' },
      ];


  return (
    <Stack>

        <SpeedDial
        ariaLabel='SpeedDial-basic'
        sx={{position:'absolute', bottom: 60, right: 16}}
        icon={<SpeedDialIcon />}>

        {actions.map((action) => <SpeedDialAction 
        key={action.name}
        icon={action.icon}
        tooltipTitle={action.name}
        
        />

        )}

        </SpeedDial>


    </Stack>
  )
}

export default MuiSpeedDial