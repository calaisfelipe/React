import { Link, Stack, CircularProgress, Box, Button } from '@mui/material'
import { useFetch } from './hooks/useFetch'
import './App.css'
import { useCallback } from 'react'
import api from './services/api'

function App() {

  const { data, error, isLoading, mutate } = useFetch('http://localhost:5000/users')

  console.log(isLoading)
  console.log(data)

 


  const handleEdit = useCallback((id) => {

    api.put(`http://localhost:5000/users/${id}`, {name: 'bartolomeu'})


    const updatedUsers = data?.data.map((user) => {
      if(user.id == id){
        return {...user , name:'bartolomeu'}
      }

      return user

      
    })


    mutate(updatedUsers)

  }, [])


  return (
    <Stack className="App" spacing={2}>

      {isLoading ? <CircularProgress /> : null}

      {data?.data.map((user) =>
        <Box key={user.id}>
          <Link
            href={`/user/${user.id}`}>{user.name}</Link>
            <Button onClick={() => handleEdit(user.id)} size='small' sx={{marginLeft: '10px'}}  variant='contained' color='warning'>Edit</Button>
            </Box>)}

      {error ? 'Something went wrong ' : null}




    </Stack>
  )
}

export default App
