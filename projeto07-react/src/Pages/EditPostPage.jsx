import React, {useState} from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import { editPostFetch, selectPostByid } from '../Components/posts/postSlice'
import { useSelector, useDispatch } from 'react-redux'
import {Typography, Stack, TextField, Button, MenuItem} from '@mui/material'
import { selectAllUsers } from '../Components/users/usersSlice'


function EditPostPage() {
    const {id} = useParams()
    const users = useSelector(selectAllUsers)   
    const selectedPost = useSelector((state) => selectPostByid(state, id))
    const [editedPost, setEditedPost] = useState(selectedPost)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const validation = editedPost.title && editedPost.body && editedPost.userId

    function handleEdit(e){

        setEditedPost({...editedPost,
        [e.target.name] : e.target.value})

    }

    function cancelEdit(id){
        navigate(`/post/${id}`)

    }

    function sendEditedPost(){
        console.log(editedPost)
        dispatch(editPostFetch(editedPost))
        navigate(`/post/${editedPost.id}`)


        

    }

  return (
    <Stack p={2} spacing={2} justifyContent='center' alignItems='center'>
        <Typography variant='h5' component='div' color='#fff'>Edite seu Post:</Typography>

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
        
        
            >

            <TextField 
            id='title-post-input'
            variant='outlined' 
            label='Título'
            name='title'
            required
            value={editedPost.title} 
            helperText='Digite o titulo ou assunto do seu post' 
            onChange={handleEdit}
            />

            <TextField 
            id='author-post-input'
            select
            label='Autor'
            helperText='Por favor selecione o Autor'
            required
            name='userId'
            onChange={handleEdit}
            value={editedPost.userId}
            
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
            value={editedPost.body}
            rows={3}
            helperText='Escreva aqui o seu Post' 
            onChange={handleEdit}   
            
            />
    
            <Stack direction='row' spacing={2}>
            <Button  
            variant='contained' 
            color='darker'
            disabled={!validation}
            onClick={sendEditedPost}
            >Editar Post</Button>

            <Button  
            variant='contained' 
            color='error'
            onClick={() => cancelEdit(editedPost.id)}
            >Cancelar</Button>
            </Stack>
              
        </Stack>

    </Stack>
  )
}

export default EditPostPage