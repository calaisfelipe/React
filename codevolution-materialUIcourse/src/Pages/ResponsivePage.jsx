import React from 'react'
import {Box, Stack, styled} from '@mui/material'
import { ThemeProvider } from '@emotion/react'
import {theme} from '../Pages/CostumazationPage'



const StyledBox = styled(Box)(({theme}) => ({

    height: '200px',
    width: '80px',
    backgroundColor: theme.palette.darker.light



}))


/*BreakPoints:
xs = mobile 0
sm = tablets 600
md = laptops 900
lg = desktops 1200
xl = large screeams  1536 */


function ResponsivePage() {
  return (
    <ThemeProvider theme={theme}>
    <Stack p={2}>
    <Box
        sx={{
            height: {
                xs: 200,
                sm: 300,
                md: 400,
                lg: 500,
                xl: 600
            },
            width: {
                xs: 100,
                sm: 200,
                md: 300,
                lg: 400,
                xl: 500
            },
            bgcolor: {
                xs:'primary.main',
                sm:'secondary.main',
                md: 'red',
                lg: 'warning.main',
                xl: 'error.main'    
            },

        }}
    >
    </Box>

    <StyledBox />


    </Stack>
    </ThemeProvider>
  )
}

export default ResponsivePage