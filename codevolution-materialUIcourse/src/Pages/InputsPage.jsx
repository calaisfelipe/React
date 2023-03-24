import React from 'react'
import {Stack } from '@mui/material'

import MuiTypografy from '../components/MuiTypografy'
import MuiTextField from '../components/MuiTextField'
import MuiSelect from '../components/MuiSelect'

function InputsPage() {
  return (
    <Stack spacing={2} direction='column'>
      <MuiTypografy />
      <hr />
      <MuiTextField />
      <hr />
      <MuiSelect />



    </Stack>
  )
}

export default InputsPage
