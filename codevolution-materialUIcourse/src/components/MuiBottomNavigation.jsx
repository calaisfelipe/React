import React, {useState} from 'react'
import {Box, BottomNavigation, BottomNavigationAction} from '@mui/material'
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Recents = () =>{
   return <a href='#'><RestoreIcon  fontSize='large' /></a>
}

const Favorites = () =>{
    return <a href='#'><FavoriteIcon fontSize='large' /></a>
}

const Nearby = () =>{
    return <a href='#'><LocationOnIcon fontSize='large' /></a>
}




function MuiBottomNavigation() {
    const [status, setStatus] = useState(0) 


function handleBottomChange(action){

    setStatus(action)

}


  return (
    <Box>

        {status === 'recents' ? <Recents /> : null }
        {status === 'favorites' ? <Favorites /> : null }
        {status === 'nearby' ? <Nearby /> : null}


      <BottomNavigation
        showLabels
        value={status}
        onChange={(e, newValue) => setStatus(newValue)}
        sx={{backgroundColor: '#222', color: '#fff', position: 'absolute', bottom: 0, width: '100%', padding: 0, margin: 0 }}

      >
        
        <BottomNavigationAction sx={{ color: '#fff' }} label='Recents' icon={<RestoreIcon />} 
        onClick={() => handleBottomChange('recents')} />

        <BottomNavigationAction sx={{ color: '#fff' }} label='Favorites' icon={<FavoriteIcon />} 
        onClick={() => handleBottomChange('favorites')} />

        <BottomNavigationAction sx={{ color: '#fff' }}label='Nearby' icon={<LocationOnIcon />} 
        onClick={() => handleBottomChange('nearby')} />

        
        </BottomNavigation>  


    </Box>
  )
}

export default MuiBottomNavigation