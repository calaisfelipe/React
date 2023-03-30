import React from 'react'
import {Stack, List, ListItem , ListItemButton , ListItemText , ListItemIcon, Divider, Typography} from '@mui/material'
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import StarBorder from '@mui/icons-material/StarBorder';

const lists = [{
    title: 'Inbox',
    icon: <InboxIcon />
},{
    title: 'Drafts',
    icon: <DraftsIcon />

},{
    title: 'mailBox',
    icon: <StarBorder />

}]

function MuiList() {
  return (
    <Stack spacing={2} direction='row'>

    <List disablePadding >
       {lists.map((item) =>
            <ListItem key={item.title} sx={{color:'#fff', bgcolor: '#222'}} divider>

                <ListItemButton>

                <ListItemIcon sx={{color: '#fff'}}>{item.icon}</ListItemIcon>
                <ListItemText primary={item.title} />
                </ListItemButton>


            </ListItem>
            

       )}
       
    </List>
        

    </Stack>
  )
}

export default MuiList