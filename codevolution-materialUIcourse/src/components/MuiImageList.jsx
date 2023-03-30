import React from 'react'
import { ImageList, ImageListItem, ImageListItemBar, Stack, Typography, IconButton } from '@mui/material'
import InfoIcon from '@mui/icons-material/Info';



const arrImg = [{
    img:'https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=700&q=60',
    tittle:'Monitor'
},
{
    img:'https://images.unsplash.com/photo-1679771070455-062b82f16a47?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=700&q=60',
    tittle:'flor'
},
{
    img:'https://images.unsplash.com/photo-1679755063700-636fe0bb95f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=700&q=60',
    tittle:'menina'
},
{
    img:'https://images.unsplash.com/photo-1679801122795-851efd94b550?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=700&q=60',
    tittle:'flor2'
},
{
    img:'https://images.unsplash.com/photo-1670272506152-6f2703532cd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=700&q=60',
    tittle:'mulher sorrindo'
},
{
    img:'https://images.unsplash.com/photo-1677585437612-ec2f19ac5439?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=700&q=60',
    tittle:'céu noturno'
},

]


function MuiImageList() {

  return (
    <Stack spacing={4} direction='row'>
        <ImageList variant='woven' sx={{width: '500px', height: '540px'}}  cols={3}>

        <ImageListItem cols={3}>
            <Typography variant='h4' textAlign='center'>Woven Variant</Typography>
        </ImageListItem>

            {arrImg.map((item) => <ImageListItem key={item.img}>
                <img src={item.img} alt={item.tittle} 
                loading='lazy' />

            </ImageListItem>

            )}
            


        </ImageList>

        <ImageList variant='masonry' sx={{width: '500px', height: '540px'}}  cols={3} gap={5}>

        <ImageListItem >
            <Typography variant='h4' textAlign='center'>masory Variant</Typography>
        </ImageListItem>

            {arrImg.map((item) => <ImageListItem key={item.img}>
                <img src={item.img} alt={item.tittle} 
                loading='lazy' />

                <ImageListItemBar title={item.tittle} subtitle='subtituilo' actionIcon={ <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.tittle}`}
              >
                <InfoIcon />
              </IconButton>
                }>
                    
                    
                </ImageListItemBar>



            </ImageListItem>

            )}
            


        </ImageList>




    </Stack>
  )
}

export default MuiImageList