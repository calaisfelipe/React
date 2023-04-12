import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Stack, CircularProgress, Box, Typography, Button } from '@mui/material'
import { userFetch, deleteUser } from '../api/clientApi'
import useSWR from 'swr'
import EditForm from '../components/EditForm'


function UserDetailsPage() {
  const [activeEditForm, setActiveEditForm] = useState(false)
  const { id } = useParams()
  const navigate = useNavigate()


  const { data, isLoading, mutate } = useSWR('userFetch', () => userFetch(id))

  console.log(data)


  function userDelete(id) {

    deleteUser(id)
    navigate('/')

  }

  function showEditForm() {
    setActiveEditForm(true)
  }

  return (
    <Stack>

      {isLoading ? <CircularProgress /> : null}
      {data && !activeEditForm ? <Box>
        <Typography variant='h6'>Name: {data.name}</Typography>
        <Typography variant='subtitle1'>Age: {data.age}</Typography>
        <Typography variant='subtitle1'>Job: {data.job}</Typography>

      </Box> : null}

      {data && activeEditForm ? <EditForm person={data ? data : ''} action={setActiveEditForm} mutate={mutate}/> : null }  
      

      <Stack direction='row' spacing={1}>
        <Button onClick={() => navigate('/')} variant='contained' >Return</Button>

        <Button
          onClick={showEditForm}
          variant='contained'
          color='warning'
          disabled={activeEditForm}
        >Edit</Button>

        <Button
          onClick={() => userDelete(data.id)}
          variant='contained' color='error' >Delete</Button>
      </Stack>


    </Stack>
  )
}

export default UserDetailsPage