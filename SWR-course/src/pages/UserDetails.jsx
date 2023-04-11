import React, { useCallback } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Stack, Typography, Box, CircularProgress, Button } from '@mui/material'
import api from '../services/api'
import { useFetch } from '../hooks/useFetch'

function userDetails() {
    const navigate = useNavigate()
    const {id} = useParams()
    const {data, mutate} = useFetch(`http://localhost:5000/users/${id}`)
  

  return (

    <Stack spacing={2} direction='column' p={2}>

    {!data ? <CircularProgress /> :
        <Stack direction='column' spacing={2}>
           <Box>Name:{data?.data.name}</Box>
            <Box>Id:{data?.data.id}</Box>

    
             <Button onClick={() => navigate('/')} variant='contained' sx={{width:'50px'}}>Return</Button>
            </Stack> }
            

    </Stack>
  )
}

export default userDetails