import React, {useState} from 'react'
import {Stack, TextField, Typography, Button } from '@mui/material'
import { editUser } from '../api/clientApi'
 
function editForm({person, action, mutate}) {
    const [editPerson, setEditPerson] = useState(person)

    const handleChange = (e) => {

        setEditPerson({
            ...editPerson, [e.target.name]: e.target.value
        })
    }

    const sendEdit = async (edited) => {

        await editUser(edited.id, edited)

        mutate({...edited})

        action(false)


    }

  return (<>
   <Typography variant='h5'>Edit :</Typography>
    <Stack spacing={2} p={2} direction='column' sx={{width:'250px'}}>
       
        <TextField
        label='Name'
        value={editPerson.name}
        size='small'
        name='name'
        onChange={handleChange}

        />
        <TextField
        label='Age'
        type='number'
        value={editPerson.age}
        size='small'
        name='age'
        onChange={handleChange}
        />
        <TextField
        label='job'
        value={editPerson.job}
        size='small'
        name='job'
        onChange={handleChange}
        />

        <Button 
        variant='contained' 
        color='success'
        onClick={() => sendEdit(editPerson)}
        >Confirm Edition</Button>

    </Stack>
    </>
  )
}

export default editForm