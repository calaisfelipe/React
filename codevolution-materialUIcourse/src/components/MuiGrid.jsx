import React from 'react'
import { Grid, Box, Typography } from '@mui/material'


// xs -> Mobile
// sm -> tablet
// md -> notebook
// lg -> desktop large monitor
// xl -> Monitores grandes e tvs

function MuiGrid() {
    return (<>
        <Typography variant='h4' >Grid Exemple:</Typography>
        <Typography variant='p'> xs - Mobile <br/>
            sm - tablet <br/>
            md - notebook <br/>
            lg - desktop large monitor <br/>
            xl - Monitores grandes e tvs</Typography>
        <Grid container gap={1}>
            <Grid item bgcolor='primary.light' p={2} xs={3} sm={6} md={12} lg={5} xl={12}><Box>item 1</Box></Grid>
            <Grid item bgcolor='secondary.light' p={2} xs={3} sm={6} md={12} lg={5}><Box>item 2</Box></Grid>
            <Grid item bgcolor='error.light' p={2} xs={3} sm={6} md={12} lg={5}><Box>item 3</Box></Grid>
            <Grid item bgcolor='warning.light' p={2} xs={3} sm={6} md={12} lg={5}><Box>item 4</Box></Grid>
        </Grid>
    </>
    )
}

export default MuiGrid