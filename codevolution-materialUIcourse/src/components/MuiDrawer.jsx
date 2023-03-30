import React, { useState } from 'react'
import { Drawer, Box, Button, List, ListItem, ListItemIcon, ListItemText, ListItemButton } from '@mui/material'
import InboxIcon from '@mui/icons-material/Inbox';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';

function MuiDrawer() {
    const [status, setStatus] = useState(false)

    function handleDrawer(e) {
        setStatus(true)
    }

    const toggleDrawer = (status) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setStatus(false);
    };


    return (
        <Box>
            <Button variant='contained' onClick={handleDrawer}>Drawer Menu</Button>

            <Drawer
                anchor='left' //Qual lado o drawer vai abrir
                open={status}
                onClose={toggleDrawer(false)}

            >
                <List>

                    <ListItem>
                        <ListItemButton onClick={toggleDrawer(false)}>
                            <ListItemIcon><AccountCircleIcon /></ListItemIcon>
                            <ListItemText>Profile</ListItemText>
                        </ListItemButton>

                    </ListItem>
                    <ListItem>
                        <ListItemButton onClick={toggleDrawer(false)}>
                            <ListItemIcon><InboxIcon /></ListItemIcon>
                            <ListItemText primary='Inbox'></ListItemText>
                        </ListItemButton>

                    </ListItem>

                    <ListItem>
                        <ListItemButton onClick={toggleDrawer(false)}>
                            <ListItemIcon><SettingsIcon /></ListItemIcon>
                            <ListItemText>settings</ListItemText>
                        </ListItemButton>

                    </ListItem>
                </List>

            </Drawer>


        </Box>
    )
}

export default MuiDrawer
