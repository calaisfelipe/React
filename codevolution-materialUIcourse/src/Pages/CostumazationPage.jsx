import React from 'react'

import { Stack, createTheme, Button, ThemeProvider } from '@mui/material'

export const theme = createTheme({
    palette: {
        primary: {
            light: '#757ce8',
            main: '#3f50b5',
            dark: '#002884',
            contrastText: '#fff',
        },
        secondary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#000',
        },
        info: {
            light: '#b0bec5',
            main: '#607d8b',
            dark: '#37474f',
            contrastText: '#fff',
        },
        darker:{
        light: '#888',
        main: '#444',
        dark: '#222',
        contrastText: '#fff',

        }

    }

})

function CostumazationPage() {
    return (
        <ThemeProvider theme={theme}>
        <Stack p={2} spacing={2} >

            <Button variant='contained' color='primary' >Primary</Button>
            <Button variant='contained' color='secondary' >Secondary</Button>
            <Button variant='contained' color='info' >Info</Button>
            <Button variant='contained' color='darker' >Darker</Button>
            <Button variant='contained' color='warning' >Warning - not alterated</Button>


        </Stack>
        </ThemeProvider>
    )
}

export default CostumazationPage