import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectPostByid } from '../Components/posts/postSlice'
import {useParams} from 'react-router-dom'
import {Stack, Snackbar, Alert} from '@mui/material'

import { selectMessage, turnOffmessage } from '../Components/posts/postSlice'
import SinglePostCard from '../layout/SinglePostCard'


function SinglePostPage() {
    const dispatch = useDispatch()
    const {id} = useParams()
    const message = useSelector(selectMessage)
    const selectedPost = useSelector((state) => selectPostByid(state, id))

  return (
    <>
    {message && message !== '' ? 
    <Snackbar
    open
    autoHideDuration={3000}
    onClose={() => dispatch(turnOffmessage())}
    >
      <Alert severity="warning" variant='filled' sx={{ width: '100%' }} onClose={() => dispatch(turnOffmessage())}>
      {message}
     </Alert>

    </Snackbar> : null}


    <Stack p={2} justifyContent='center' alignItems='center'>

        <SinglePostCard content={selectedPost} />

    </Stack>
    </>
  )
}

export default SinglePostPage