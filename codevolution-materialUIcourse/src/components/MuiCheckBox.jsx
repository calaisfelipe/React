import React, { useState } from 'react'
import { Box, FormControlLabel, Checkbox, FormControl, FormLabel, FormGroup, FormHelperText } from '@mui/material'
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

function MuiCheckBox() {
    const [terms, setTerms] = useState(false)
    const [options, setOptions] = useState([])
    //console.log(terms)
    console.log(options)

    function handleOption(e) {

       const index = options.indexOf(e.target.value)

       if(index === -1){
        setOptions([...options, e.target.value])
   
       }else{
        
        setOptions(options.filter((option) => option !== e.target.value))
       }

    }

    function handleAccept(e) {
        setTerms(e.target.checked)
    }

    return (
        <Box>
                <Checkbox  icon={<BookmarkBorderIcon />} 
                checkedIcon={<BookmarkIcon />}
                checked={terms}  onChange={handleAccept}
                
                />

            <FormControlLabel label='I accept terms and conditions' control={<Checkbox />} checked={terms} onChange={handleAccept} />

            {terms && <Box>
                <FormControl>

                <FormLabel id='select-option-group-label'>
                    Select one option

                </FormLabel>

                <FormGroup name='select-option-group'>

                <FormControlLabel label='Opção 1' control={<Checkbox color='error' value={'1'} onChange={handleOption} checked={options.includes('1')} />}  />

                <FormControlLabel label='Opção 2' control={<Checkbox color='error' value={'2'} onChange={handleOption} checked={options.includes('2')} />}  />

                <FormControlLabel label='Opção 3' control={<Checkbox color='error' value={'3'} onChange={handleOption} checked={options.includes('3')} />}  />

                </FormGroup>
                <FormHelperText>Invalid Selection</FormHelperText>
                </FormControl>



            </Box>}

        </Box>
    )
}

export default MuiCheckBox
