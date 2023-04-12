import {useState} from 'react'
import './App.css'
import useSWR from 'swr'
import { fetchData, newUser } from './api/clientApi'
import { Stack, Link, Button, TextField} from '@mui/material'

function App() {
  const initialUser = {
    name: '',
    job: '',
    age: 0
  }

  const [addNewUser, setAddNewUser] = useState(initialUser)

  const { data , isValidating, mutate} = useSWR('FetchUsers', fetchData, {
    onSuccess: () => {
      console.log('sucesso no fetch')      
    }
  })

 

  function handleUser(e){

      setAddNewUser({
        ...addNewUser, [e.target.name] : e.target.value
      })

  }


  const  addUser = async (user) => { 
 
    await newUser(user)
   
    mutate((oldData) => {
      return {...oldData,
        data:[ ...oldData.data, user]
      }
    }, true)

    setAddNewUser(initialUser)
    

  }

  console.log(data)

  return (
    <Stack className="App" p={2} spacing={1} sx={{width:'250px'}}>
      {isValidating ? 'Fetching...' : null}
      {data?.data.map((user) => <Link href={`/users/${user.id}`} key={user.id}>{user.name}</Link>)}

    <Stack direction='column' spacing={1}>

      <TextField 
      label='Nome'
      name='name'
      onChange={handleUser}
      value={addNewUser.name}
      size='small'
      />

      <TextField 
      type='number'
      label='Idade'
      name='age'
      size='small'
      onChange={handleUser}
      value={addNewUser.age}
      />

      <TextField 
      label='profissao'
      name='job'
      size='small'
      onChange={handleUser}
      value={addNewUser.job}
      
      />

      </Stack>

      <Button onClick={() => addUser(addNewUser)} variant='contained' color='success' >Adicionar</Button>
    </Stack>
  )
}

export default App
