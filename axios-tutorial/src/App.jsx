import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import { Paper, Typography,Stack, TextField, Button, IconButton} from '@mui/material'
import { Masonry } from '@mui/lab'
import DeleteIcon from '@mui/icons-material/Delete';


function App() {
  const [editedPost, setEditedPost] = useState({})

  const [posts, setPosts] = useState([])
  const [newPost, setNewPost] = useState({
    id: '',
    body: '',
    datetime: new Date().toLocaleDateString(),
    title: ''

  })
  const url = 'http://localhost:5000'

  const fetchPosts = async () => {

    try {
      const response = await axios.get(`${url}/posts`)
      setPosts(response.data)
    }
    catch (err) {
      if (err.response) {
        // API RESPONSES 
        console.log(err.response.data)
        console.log(err.response.status)
        console.log(err.response.headers)
      } else {
        // OTHER ERRORS, LIKE CONECTION
        console.log(`Error: ${err.message}`)
      }

    }

  }
  
  useEffect(() => {

  
    fetchPosts()


  }, [])

  function handleNewPost(e) {

    setNewPost({
      ...newPost, [e.target.name]: e.target.value
    })

  }

  function createNewPost(post) {
   
    const fetchNewPost = async (post) => {
      try {
        const response = axios.post(`${url}/Posts`, post)
        return response.data

      }
      catch (err) {
        err.message
      }
    }

    fetchNewPost(post)
    fetchPosts()
    setNewPost({...newPost, title:'', body:''})
    
  }

  function deletePost(postId) {

    const deleteFetchPost = async (id) => {

      try {
        const response = await axios.delete(`${url}/Posts/${id}`)
        return response.data

      }
      catch (err) {
        err.message

      }
    }

    deleteFetchPost(postId)
    fetchPosts()
    

  }

  function handleEditChange(e){
    
    if(e.target.value == 0 ){return}
    const selectPostById = posts.find((post) => post.id == e.target.value )
    
    setEditedPost(selectPostById)
   
  }

  function handleEditing(e){

    setEditedPost({...editedPost, [e.target.name] : e.target.value})

  }

  function editingFetch(post){
      
      const fetchEditing = async (post) =>{

        try{ const response = axios.put(`${url}/posts/${post.id}`, post)
        return response.data

        }
        catch(err){
            err.message
        }
      }

        fetchEditing(post)
        setEditedPost({...editedPost, title:'', body: ''})
        fetchPosts()

  }



  return (
    <Stack direction='column' spacing={2} p={2} className="App">

      <Masonry sx={{ width: 500 }} columns={4} >
        {posts && posts.map((post) =>

          <Paper key={post.id} elevation={10}
            sx={{
              bgcolor: '#444', color: '#fff',
              padding: '1em'
            }} >
            <Stack spacing={1} direction='row'>
              <Typography variant='h6'>{post.title}</Typography>
              <IconButton size='small' onClick={() => deletePost(post.id)}><DeleteIcon /></IconButton>
            </Stack>

            <Typography variant='body1'>{post.body}</Typography>
            <Typography variant='subtitle2'>{post.datetime}</Typography>

          </Paper>
        )}
      </Masonry>

      
        <Stack
          spacing={1}
          width={200}
          component='div'
          >
          <Typography>Criar post:</Typography>
          <TextField
            size='small'
            label='Titulo'
            name='title'
            value={newPost.title}
            onChange={handleNewPost} />

          <TextField
            multiline
            name='body'
            label='Body'
            value={newPost.body}
            onChange={handleNewPost} />

          <Button onClick={() => createNewPost(newPost)} variant='contained'>Enviar</Button>

        </Stack>



        <Stack width={250} spacing={1}>
          <Typography>Editar Post:</Typography>

          <select 
          onChange={handleEditChange}
          >
            <option defaultValue={0} value={0} selected>Escolha um post</option>
            {posts && posts.map((post) => <option key={post.id}value={post.id}>{post.title}</option>)}
          </select>

          <TextField
            size='small'
            name='title'
            value={editedPost.title}
            onChange={handleEditing}
          
          
             />

          <TextField
            multiline

            name='body'
            value={editedPost.body}
            onChange={handleEditing}
            
            
             />

          <Button onClick={() => editingFetch(editedPost)} variant='contained'color='warning'>Editar</Button>



        </Stack>


     


    </Stack>
  )
}

export default App
