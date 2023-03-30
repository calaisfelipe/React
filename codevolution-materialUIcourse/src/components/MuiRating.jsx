import {Box, Rating , Typography} from '@mui/material'
import {styled} from '@mui/material/styles'
import React, {useState} from 'react'
import CloudIcon from '@mui/icons-material/Cloud';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';

const StyledRating = styled(Rating)({
    '& .MuiRating-iconHover' :{
        color: '#0033ff',
    },
    

})

function MuiRating() {
    const [avaliation, setAvaliation] = useState(0)
    const [avaliationTwo, setAvaliationTwo] = useState(0)

    console.log(avaliation)


    const handleAvaliation = (e) =>{

        setAvaliation(e.target.value)

    }

    const handleAvaliationTwo = (e) =>{

        setAvaliationTwo(Number(e.target.value))

    }

  return (
   <Box>

    <Typography component='legend'>Avaliação:</Typography>
        <Rating name='simple-Controlled' value={avaliation} onChange={handleAvaliation} precision={0.5} size='large' />
        <Typography component='span'> {avaliation}</Typography>


    <Typography component='legend'>Avaliação em nuvem:</Typography>

     <StyledRating name='iconed-Controlled' value={avaliationTwo} onChange={handleAvaliationTwo} icon={<CloudIcon fontSize='large' color='secondary'/>} emptyIcon={<CloudQueueIcon fontSize='large' />} />

     <Typography component='span'> {avaliationTwo}</Typography>


   </Box>
  )
}

export default MuiRating

