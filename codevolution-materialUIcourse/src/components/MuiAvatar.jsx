import React from 'react'
import { Stack, Avatar, AvatarGroup} from '@mui/material'
import astronauta from '../img/astronauta.png'
import pessoas from '../img/pessoas.jpg'


function MuiAvatar() {
  return (
    <Stack spacing={4} direction='row'>

    <Avatar alt='Felipe Calais' src={astronauta} />
    <Avatar alt='Felipe Calais' src='' sx={{bgcolor: 'primary.light'}}>FC</Avatar>
    <Avatar variant='square' alt='Felipe Calais' src='' sx={{bgcolor: 'success.light'}}>FC</Avatar>
    <Avatar variant='rounded' alt='Felipe Calais' src='' sx={{bgcolor: 'warning.light'}}>FC</Avatar>

    <Avatar alt='Felipe Calais' src={pessoas}  sx={{width: 56, height: 56}}/>

    <AvatarGroup max={3}> 
    <Avatar alt='Felipe Calais' src={astronauta} />
    <Avatar alt='Felipe Calais' src={pessoas}  />
    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
    <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
    <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
    <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
    <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />

    </AvatarGroup>


    </Stack>
  )
}

export default MuiAvatar