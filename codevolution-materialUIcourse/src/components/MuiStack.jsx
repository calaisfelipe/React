import React from 'react'
import {Box, Divider, Stack} from '@mui/material'

const list = ['one', 'two', 'three']

function MuiStack() {


  return (
    <Box>
        <Stack  spacing={2} direction='row' sx={{border: '1px solid'}} divider={<Divider  orientation='vertical' flexItem sx={{backgroundColor: 'black'}} />}>
            {list.map((item) => <a>{item}</a>)}
        </Stack>

        <Stack spacing={5} direction='row' sx={{border: '1px solid'}}>
            {list.map((item) => <a>{item}</a>)}
        </Stack>


    </Box>
  )
}

export default MuiStack
