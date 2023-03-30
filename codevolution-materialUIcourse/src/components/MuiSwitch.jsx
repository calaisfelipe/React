import { Box, Switch, FormControlLabel, FormControl, FormLabel, FormHelperText } from '@mui/material'
import React, {useState} from 'react'

function MuiSwitch() {
    const [power, setPower] = useState(false)
    const [sound, setSound] = useState(false)

    console.log(power)

    const handlePower = (e) =>{
        setPower(e.target.checked)
    }
    const handleSound = (e) =>{
        setSound(e.target.checked)
    }

  return (
    <Box>

        <FormControl>
        <FormLabel>Controls:</FormLabel>    

        <FormControlLabel label='On/off' control={<Switch color='error' checked={power} onChange={handlePower} />} />
        <FormControlLabel label='Sound' control={<Switch color='success' checked={sound} onChange={handleSound} size='small'/>} />


        <FormHelperText>Switch inputs</FormHelperText>
        </FormControl>
        



    </Box>
  )
}

export default MuiSwitch