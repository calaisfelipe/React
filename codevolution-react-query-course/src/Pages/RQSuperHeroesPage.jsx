import React from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'
import { Stack, List, ListItem, Typography, ListItemText, CircularProgress } from '@mui/material'

function RQSuperHeroesPage() {

const {isLoading, data , isError, error} = useQuery('super-heroes', () =>{
  return axios.get('http://localhost:5000/superheroes')

})
 
 

  return (
    <Stack p={2} spacing={2} justifyContent='center' alignItems='center'>
      <Typography variant='h3'>RQSuperHeroes</Typography>
      {isLoading ? <CircularProgress /> : null}
      {isError ? <h2>something went wrong!! <br/>{error.message}</h2> : null}
      <List
        sx={{
          bgcolor: '#222',
          color: '#fff'
        }}>

        {!isLoading && data && data?.data.map((hero) =>
          <ListItem key={hero.id}>
            <ListItemText>
              <Typography variant='h6'>{hero.name}</Typography>
              <Typography variant='subtitle2'>{hero.alterEgo}</Typography>
        </ListItemText> 

          </ListItem>)}

      </List>

    </Stack>
  )
}

export default RQSuperHeroesPage
