import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Stack, CircularProgress, List, ListItem, ListItemText, Typography, Divider } from '@mui/material'
 
function SuperHeroesPage() {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])
  const [error, setError] = useState('')

  const fetchingSuperheroes = async () => {

    try {
      const response = await axios.get('http://localhost:5000/superheroes')
      setData(response.data)
      setLoading(false)

    } catch (err) {
      setError(err.message)
      setLoading(false)
    }

  }

  useEffect(() => {
    setLoading(true)
    fetchingSuperheroes()

  }, [])

  if(error){console.log(error)}

  return (
    <Stack p={2} spacing={2} justifyContent='center' alignItems='center'>
      <Typography variant='h3'>SuperHeroes</Typography>
      {loading ? <CircularProgress /> : null}
      {error ? <Typography variant='h6'>Something went Wrong!!<br />{error}</Typography> : null}
      
      <List
        sx={{
          bgcolor: '#222',
          color: '#fff'
        }}>

        {!loading && data.length > 0 && data.map((hero) =>
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

export default SuperHeroesPage