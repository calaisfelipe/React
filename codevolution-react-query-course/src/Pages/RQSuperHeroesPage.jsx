import React, { useState } from 'react'
import useSuperHeroesData, {useAddSuperHeroData} from '../Hooks/useSuperHeroesData'


import { Stack, List, ListItem, Typography, ListItemText, CircularProgress, Link, Box, TextField, Button } from '@mui/material'


function RQSuperHeroesPage() {
  const [pooling, setPooling] = useState(3000)
  const [newHero, setNewHero] = useState({
    id:'',
    name:'',
    alterEgo:''
  })

  const { isLoading, data, isError, error } = useSuperHeroesData(onSuccess,onError)

  const {mutate} = useAddSuperHeroData()


  function onSuccess(data) {
    console.log('Performs side effect after data fetching', data)

    if (data.data.length === 4) {
      setPooling(0)
    }

  }

  function onError(error) {
    console.log('Performs side effect after encountering error', error)

  }

  function handleHeroChange(e){
    setNewHero({
      ...newHero, [e.target.name]: e.target.value
    })
  }

  function postNewHero(e){
    e.preventDefault()
    console.log(newHero)
    mutate(newHero)
    setNewHero({name:'', alterEgo:''})

  }


return (
  <Stack p={2} spacing={2} justifyContent='center' alignItems='center'>
    <Typography variant='h3'>RQSuperHeroes</Typography>

    <Stack 
    spacing={1} 
    component='form'
    onSubmit={postNewHero}>
        <TextField 
        label='hero Name'
        name='name'
        onChange={handleHeroChange}
        value={newHero.name}
        
        />
        <TextField 
        label='hero AlterEgo'
        name='alterEgo'
        onChange={handleHeroChange}
        value={newHero.alterEgo}
        />
        <Button
        type='submit'
        variant='contained'
        >Enviar</Button>

    </Stack>


    {isLoading ? <CircularProgress /> : null}
    {isError ? <h2>something went wrong!! <br />{error.message}</h2> : null}
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
            <Link href={`/superherodetails/${hero.id}`} color='primary' variant='overline'>Teste</Link>
          </ListItemText>

    </ListItem>)}



    </List>

  </Stack>
)
}

export default RQSuperHeroesPage
