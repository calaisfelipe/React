import React, {useState} from 'react'
import {Card, CardContent, CardActions, Typography, Button, IconButton, CardHeader, Avatar, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { red } from '@mui/material/colors'
import { useSelector,useDispatch } from 'react-redux';
import { selectAllUsers } from '../Components/users/usersSlice';
import TimeAgo from './TimeAgo'
import {useNavigate} from 'react-router-dom'
import { deletedPostFetch } from '../Components/posts/postSlice';
//import { parseISO } from 'date-fns';


function SinglePostCard({content}) {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [liked, setLiked] = useState(false)
    const [openDialog, setOpenDialog] = useState(false)
    const users = useSelector(selectAllUsers)
    const user = users.find((user) => user.id === content.userId)
    

  function handleEdit(id){
    navigate(`/edit/${id}`)
  }

  function handleCloseDialog(){

    setOpenDialog(false)
  }

  function deletePost(post){
    
    console.log(post)
    dispatch(deletedPostFetch(post))
    navigate('/')



  }

  return (
    <>
    <Card key={content.id} 
    sx={{ maxWidth: {
        xs: 350,
        md: 450,
        lg: 500}, 
        minWidth:{
          xs: 350,
          md: 450,
          lg: 500
        }
        }}>
        <CardContent>
            <CardHeader 
            avatar={
                <Avatar sx={{ bgcolor: red[500] }}>{user.name[0]}</Avatar>

            }
            title={user.name}
            subheader={<TimeAgo time={content.date}/>}
            />
 

        <Typography gutterBottom variant="h5" component="div">
            {content.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {content.body}
          </Typography>

        </CardContent>
        <CardActions>
        <IconButton onClick={() => setLiked(!liked)}>{liked ? <FavoriteIcon color='error'/> : <FavoriteBorderIcon /> }</IconButton>
        <Button size="small" color="warning" variant='contained' onClick={() => handleEdit(content.id)}>
          Edit
        </Button>

        <Button size="small" color="error" variant='contained' onClick={() => setOpenDialog(true)} >
          Remove
        </Button>
        
        
        </CardActions>

    </Card>
    
    <Dialog
      open={openDialog}
      onClose={handleCloseDialog}

    >

            <DialogTitle>
              Are you sure you wanna delete this post?
            </DialogTitle>
            <DialogContent>
              <DialogContentText>If deleted the post cannot be recoved.</DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button variant='contained' color='error' onClick={() => deletePost(content)}>yes</Button>
              <Button variant='contained' color='success' onClick={handleCloseDialog}>No</Button>

            </DialogActions>


    </Dialog>
    
    
    
    </>
  )
}

export default SinglePostCard