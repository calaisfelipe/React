import React from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import {Stack, CircularProgress, Box, Typography, Button} from '@mui/material'
import { userFetch } from '../api/clientApi'
import useSWR  from 'swr'


function UserDetailsPage() {
    const {id} = useParams()
    const navigate = useNavigate()


    const {data, isLoading} = useSWR('userFetch', () => userFetch(id))

    console.log(data)

  return (
    <Stack>

        {isLoading ? <CircularProgress /> : null}
        {data ? <Box> 
            <Typography variant='h6'>Name: {data.name}</Typography>
            <Typography variant='subtitle1'>Age: {data.age}</Typography>
            <Typography variant='subtitle1'>Job: {data.job}</Typography>
            
            <Button onClick={() => navigate('/')} variant='contained' >Return</Button>
    
              </Box>: null}




    </Stack>
  )
}

export default UserDetailsPage