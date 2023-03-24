import React, {useState} from 'react'
import {Box, FormControlLabel, Checkbox} from '@mui/material'

function MuiCheckBox() {
    const [terms, setTerms] = useState(false)
    const [options, setOptions] = useState([])
    console.log(options)

    function handleOption(e) {

        setOptions([...options, e.target.value])

    }

    function handleAccept(e){
            setTerms(!terms)
    }

  return (
    <Box>
        <FormControlLabel label='I accept terms and conditions' control={<Checkbox />} value={true} onChange={handleAccept}/>

        {terms && <Box>
            <FormControlLabel label='Opção 1' control={<Checkbox  color='error' /> } value={1} onChange={handleOption}/>
            <FormControlLabel label='Opção 2' control={<Checkbox  color='error' /> } value={2} onChange={handleOption}/>
            <FormControlLabel label='Opção 3' control={<Checkbox  color='error' /> } value={3} onChange={handleOption}/>
        </Box>}
            
    </Box>
  )
}

export default MuiCheckBox
