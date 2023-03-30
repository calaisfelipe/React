import React from 'react'
import {Stack} from '@mui/material'

import MuiRadioButton from '../components/MuiRadioButton'
import MuiCheckBox from '../components/MuiCheckBox'
import MuiSwitch from '../components/MuiSwitch'
import MuiRating from '../components/MuiRating'
import MuiAutoComplete from '../components/MuiAutoComplete'

function FormPage() {
  return (
    <Stack spacing={3}  p={2}>

        <MuiRadioButton />
        <MuiCheckBox />
        <MuiSwitch />
        <MuiRating />
        <MuiAutoComplete />





    </Stack>
  )
}

export default FormPage
