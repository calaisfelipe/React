import './App.css'
import { Stack, Typography, Button, List, ListItem } from '@mui/material'
import useSuperHeroesData from './Hooks/useSuperHeroesData'


function App() {


  const { data, isLoading, refetch, isSuccess } = useSuperHeroesData(null, null, false)


  return (<>
    <Stack direction='row' className="App" p={2} spacing={2}>
      <Typography>
        do you wanna know my favorites superheroes?
      </Typography>
      <Button onClick={refetch} variant='contained'>yes</Button>
    </Stack>
    <Stack direction='column' className="App" p={2} spacing={2}>
      {isSuccess ? <p>Meus herois favoritos são:</p> : null}
      <List>
        {data ? data?.data.map((hero) => <ListItem key={hero.id}>{hero.name}</ListItem>) : null}

      </List>
    </Stack>
  </>
  )
}

export default App
