import React, { useState, useEffect } from 'react'
import { Stack, Skeleton,Typography  } from '@mui/material'
import photo from '../img/astronauta.png'

function MuiSkeleton() {
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        setTimeout(() => {
            setLoading(false)

        },3000)

    }, [])

    return (
        <Stack bgcolor='#e3e3e3'>
         <Typography m={2} variant='h6'>Skeleton exemple!!  need page reaload</Typography>

            <Stack direction='row' spacing={2}>

                {loading ? <Skeleton variant='rectangular' width={100} height={100} /> : <img src={photo} style={{ width: '100px', height: '100px' }} />}

                {loading ? <Skeleton variant='text' width={100} height={100} /> : <Typography sx={{ width: '100px', height: '100px' }}variant='h4'>Titulo aqui</Typography>}

            </Stack>


        </Stack>
    )
}

export default MuiSkeleton