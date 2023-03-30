import React, {useState} from 'react'
import {Stack, Chip, Avatar} from '@mui/material'
import FaceIcon from '@mui/icons-material/Face';


const tags = [
    '#tag1', '#tag2','#tag3', '#tag4','#tag5', '#tag6','#tag7']


function MuiChip() {
    const [arr, setArr] = useState(tags)

    function handleDelete(tag){
        
        setArr( arr.filter((item) => item !== tag))
        
    }


  return (<>
    <Stack spacing={2} direction='row' bgcolor='#e3e3e3'>

        <Chip label='chip exemple' color='primary'/>
        <Chip label='chip outlined' variant='outlined'/>

        <Chip avatar={<Avatar>F</Avatar>} label='Felipe calais' color='warning'/>

        <Chip label='User' icon={<FaceIcon htmlColor='#222'/>}  />

    </Stack>

    <Stack spacing={2} direction='row' bgcolor='#222'>
        {arr.map((tag) => <Chip key={tag}
        label={tag} color='primary'
        onClick={() => alert('clicou')}
        onDelete={() => handleDelete(tag)}
        />)}


    </Stack>


    </>
  )
}

export default MuiChip