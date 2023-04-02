import React, {useState} from 'react'
import {Card, CardContent, CardActions, Typography, Button, IconButton, CardHeader, Avatar, } from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { red } from '@mui/material/colors'
import { useSelector } from 'react-redux';
import { selectAllUsers } from '../Components/users/usersSlice';
import TimeAgo from './TimeAgo'
import {useNavigate} from 'react-router-dom'
//import { parseISO } from 'date-fns';


function PostCard({content}) {
    const navigate = useNavigate()
    const [liked, setLiked] = useState(false)
    const users = useSelector(selectAllUsers)
    const user = users.find((user) => user.id === content.userId)
    
 function handleEditPage(id){

  navigate(`/post/${id}`)

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
        <Button size="small" color="primary" onClick={() => handleEditPage(content.id)}>
          See more
        </Button>
        
        </CardActions>

    </Card>
    
    
    
    
    
    
    </>
  )
}

export default React.memo(PostCard)