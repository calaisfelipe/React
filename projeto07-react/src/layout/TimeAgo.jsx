import React from 'react'
import { parseISO, formatDistanceToNow } from 'date-fns'
import {Typography} from '@mui/material'

function TimeAgo({time}) {
    let timeAgo = ''
    
    if(time){
       
        const date = parseISO(time)
        const timePeriod = formatDistanceToNow(date)
        timeAgo = `${timePeriod} ago`
    }

  return (
    <>
    <Typography variant='subtitle2' component='span'>{timeAgo}</Typography>
    
    </>
  )
}

export default TimeAgo