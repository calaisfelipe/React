import React, {useState} from 'react'
import {
    Box,
    FormControl,
    FormLabel,
    FormControlLabel,
    RadioGroup,
    Radio,
    FormHelperText
} from '@mui/material'

function MuiRadioButton() {
    const [years , setYears ] = useState('')
    console.log(years)

    function handleYearsChange(e) {       
            setYears(e.target.value)
    }

    return (
        <Box>


            <FormControl>
                <FormLabel id='job-experience-group-label'>
                    Years of experience
                </FormLabel>

                <RadioGroup name='Job-experience-group' aria-labelledby='job-experience-group-label' onChange={handleYearsChange} value={years} row>

                    <FormControlLabel control={<Radio size='small' color='success' />} label='0-2' value='0-2' />

                    <FormControlLabel control={<Radio />} label='3-5' value='3-5'/>

                    <FormControlLabel control={<Radio />} label='6-10' value='6-10'/>

                </RadioGroup>
                <FormHelperText>Invalid selection</FormHelperText>
            </FormControl>



        </Box>
    )
}

export default MuiRadioButton