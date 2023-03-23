import React, {useState} from 'react'
import { ToggleButton, Stack, ToggleButtonGroup } from "@mui/material";
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';


function MuiToggleButton() {
    const [formats, setFormats] = useState(null)
    const [formatsTwo, setFormatsTwo] = useState(['bold','italic'])
    console.log(formats)

    function handleFormat(event, newFormats)  {

        setFormats(newFormats)
        
    }

    function handleFormatTwo(event, newFormats)  {

        setFormatsTwo(newFormats)
        
    }


  return (
    <>
    <Stack direction='row' spacing={2}>

        <ToggleButtonGroup 
        value={formats}
        exclusive
        onChange={handleFormat}
        color='error'
        variant='contained'
        size='large'
        >
            <ToggleButton value='bold'><FormatBoldIcon /></ToggleButton>
            <ToggleButton value='italic'><FormatItalicIcon /></ToggleButton>
            <ToggleButton value='underlined'><FormatUnderlinedIcon /></ToggleButton>

        </ToggleButtonGroup>

        <ToggleButtonGroup 
        value={formatsTwo}
        onChange={handleFormatTwo}
        color='primary'
        variant='outlined'
        size='small'
        orientation='vertical'
        >
            <ToggleButton value='bold'><FormatBoldIcon /></ToggleButton>
            <ToggleButton value='italic'><FormatItalicIcon /></ToggleButton>
            <ToggleButton value='underlined'><FormatUnderlinedIcon /></ToggleButton>

        </ToggleButtonGroup>


    </Stack>


    </>
  )
}

export default MuiToggleButton