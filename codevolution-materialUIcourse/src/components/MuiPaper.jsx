import React from 'react'
import { Stack, Paper } from '@mui/material'

function MuiPaper() {
    return (
        <Stack spacing={2} direction='row'>
            <Paper elevation={1} variant='outlined' sx={{
                backgroundColor: '#888',
                color: '#fff', width: '100px',
                height: '100px'
            }}>Paper 1</Paper>

            <Paper square elevation={3} sx={{
                backgroundColor: '#777',
                color: '#fff', width: '100px',
                height: '100px'
            }}>Paper 1</Paper>

            <Paper elevation={24} sx={{
                backgroundColor: '#555',
                color: '#fff',
                width: '100px',
                height: '100px'
            }}>Paper 1</Paper>


        </Stack>
    )
}

export default MuiPaper