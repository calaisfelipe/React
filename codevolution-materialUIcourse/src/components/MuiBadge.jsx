import React from 'react'
import { Stack, Badge } from '@mui/material'
import MailIcon from '@mui/icons-material/Mail';

const emailNumber = 0

function MuiBadge() {
  return (
    <Stack spacing={2} direction='row'>

    <Badge badgeContent={101} max={99} color='error'>
        <MailIcon />
    </Badge>

    <Badge badgeContent={155} max={999} color='secondary'>
        <MailIcon />
    </Badge>

    <Badge variant='dot' badgeContent={155} max={999} color='primary'>
        <MailIcon />
    </Badge>

    <Badge overlap='circular' variant='dot' badgeContent={155} max={999} color='success'>
        <MailIcon />
    </Badge>

    <Badge  badgeContent={155} max={999} color='warning' anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left'
    }}>
        <MailIcon />
    </Badge>

    <Badge  badgeContent={155} max={999}  color='info' anchorOrigin={{
        vertical: 'top',
        horizontal: 'left'
    }}>
        <MailIcon />
    </Badge>

    <Badge  badgeContent={emailNumber} max={999}  color='info' invisible={emailNumber > 0 ? false : true}
     anchorOrigin={{
        vertical: 'top',
        horizontal: 'left'
    }}>
        <MailIcon />
    </Badge>




    </Stack>
  )
}

export default MuiBadge