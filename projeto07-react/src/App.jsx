//import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectMessage, selectAllPosts, turnOffmessage } from "./Components/posts/postSlice";
import './App.css'
import {Stack, Snackbar, Alert} from '@mui/material'
import PostCard from './layout/PostCard';


function App() {
  const dispatch = useDispatch()
  const message = useSelector(selectMessage)
  const posts = useSelector(selectAllPosts)
  const orderedPosts = posts.slice().sort((a,b) => b.date.localeCompare(a.date))
  

  return (
   <Stack direction='column' spacing={2} p={2} justifyContent='center' alignItems='center'>
    {message && message !== '' ? 
    <Snackbar
    open
    autoHideDuration={3000}
    onClose={() => dispatch(turnOffmessage())}
    >
      <Alert severity="success" variant='filled' sx={{ width: '100%' }} onClose={() => dispatch(turnOffmessage())}>
      {message}
     </Alert>

    </Snackbar> : null}

    {orderedPosts && orderedPosts.map((post) => <PostCard key={post.id} content={post} />)}
    

   </Stack>
  )
}

export default App
