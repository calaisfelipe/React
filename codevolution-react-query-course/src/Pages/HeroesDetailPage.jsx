import React from 'react'
import { useParams } from 'react-router-dom'
import { Stack, Typography, CircularProgress } from '@mui/material'
import { useSuperhero } from '../Hooks/useSuperhero'

function HeroesDetailPage() {
    const {id} = useParams()

    const {data, isLoading} = useSuperhero(id)

    
  return (
    <Stack p={2}>
        <Typography variant='h5'>Hero Details:</Typography>

        {isLoading ? <CircularProgress /> : null}
        {data ? <Stack><Typography variant='body1'>{data?.data.name}</Typography>
        <Typography variant='subtitle2'>{data?.data.alterEgo}</Typography></Stack> : 'Hero not found'}
        


    </Stack>
  )
}

export default HeroesDetailPage