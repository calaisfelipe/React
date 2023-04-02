import React, {useState} from 'react'
import {Stack, Box, TextField, Typography , MenuItem , Button } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { selectAllUsers } from '../Components/users/usersSlice'
import { addPostFetch } from '../Components/posts/postSlice'
import { useNavigate} from 'react-router-dom'


function AddPostPage() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const users = useSelector(selectAllUsers)

   
    const [newPost, setNewPost] = useState({
        title: '',
        body:'',
        userId: '',
        date: '',
        id:''

    })

    function handlePost(e){

        setNewPost({...newPost, [e.target.name] : e.target.value}

        )
    }
   
    function sendPost(e){
        e.preventDefault()
        
        dispatch(addPostFetch(newPost))
      
        console.log(newPost)
        navigate('/')

    }

    const validation = newPost.body && newPost.title && newPost.userId
    
  return (
    <Stack p={2} spacing={2} justifyContent='center' alignItems='center'>
        <Typography variant='h5' component='div' color='#fff'>Crie seu Post:</Typography>

        <Stack 
        spacing={2} p={2} 
        component='form'  
        sx={{
            bgcolor: '#fff',
            borderRadius: '10px',
            width:{
                lg: 500,
                xl: 600,
            }
            }}
        onSubmit={sendPost} 
            
            >

            <TextField 
            id='title-post-input'
            variant='outlined' 
            label='Título'
            name='title'
            required 
            helperText='Digite o titulo ou assunto do seu post' 
            onChange={handlePost}
            />

            <TextField 
            id='author-post-input'
            select
            label='Autor'
            helperText='Por favor selecione o Autor'
            required
            name='userId'
            onChange={handlePost}
            
            >

            {users ? users.map((user) => <MenuItem key={user.id} value={user.id}>{user.name}</MenuItem>) : <MenuItem>Não foi possivel carregar os Autores</MenuItem> }

            </TextField>


            <TextField 
            id='body-post-input'
            variant='outlined'
            name='body'
            label='Post'
            required
            multiline
            rows={3}
            helperText='Escreva aqui o seu Post' 
            onChange={handlePost}   
            
            />
    
            <Button  
            variant='contained' 
            color='darker'
            type='submit'
            disabled={!validation}
            >Criar Post</Button>
              
        </Stack>

    </Stack>
  )
}

export default AddPostPage