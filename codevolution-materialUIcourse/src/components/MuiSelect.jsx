import React, {useState} from 'react'
import { Select, Box, TextField, MenuItem} from "@mui/material";



function MuiSelect() {
    const [country, setCountry] = useState([])
    console.log(country)


    const  handleChange = (e) => {

        setCountry(e.target.value)

    }

  return (
    <Box width='250px' >
        <TextField label='select Country' 
        select 
        value={country} 
        onChange={handleChange} 
        fullWidth
        SelectProps={{
            multiple: true
        }}
        size='medium'
        color='secondary'
        helperText='select your country'
        error={country.length == 0 ? 'please select your country' : null}

        >
            <MenuItem value='BR'>Brasil</MenuItem>
            <MenuItem value='US'>USA</MenuItem>
            <MenuItem value='AU'>Australia</MenuItem>



        </TextField>


    </Box>
  )
}

export default MuiSelect