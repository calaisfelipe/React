import React from 'react'
import { Card, Stack, CardActions, CardContent, Button , CardMedia} from '@mui/material'

function MuiCard() {
  return (
    <Stack  spacing={2} direction='row' >
        <Card variant='outlined' sx={{
            width: '200px',
            backgroundColor: '#222',
            color: '#fff'
        }}>
            <CardContent>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod quaerat facilis doloremque explicabo voluptatum placeat ducimus corrupti dignissimos facere officia saepe hic iste maiores consequuntur libero, magni labore consectetur ex!
            </CardContent>

            <CardActions>
                <Button size='small' variant='contained' color='primary'>Share</Button>
            </CardActions>

        </Card>

        <Card variant='outlined' raised   sx={{width: '190px', height: '250px', backgroundColor: '#e3e3e3' }}>
            <CardMedia component='img' 
            image='https://images.unsplash.com/photo-1679678691006-d8a1484830c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
            alt='Mochila'
            height='90' />
            <CardContent>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod quaerat facilis dolo
            </CardContent>

            <CardActions>
                <Button size='small' variant='text' color='primary'>Share</Button>
                <Button size='small' variant='text' color='primary'>Learn More</Button>
            </CardActions>

        </Card>


    </Stack>
  )
}

export default MuiCard