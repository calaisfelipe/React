import React from 'react'
import {Button, Stack} from '@mui/material'

function CounterTwo(props) {
  return (
    <div>
        <h1>Counter Two</h1>
        <p>{props.count}</p>

        <Stack spacing={2} direction='row'>

        {props.handleIncrement && <Button onClick={props.handleIncrement} color='success'
        variant='contained'>
            Increment</Button>}

        {props.handleDecrement && <Button 
        onClick={props.handleDecrement}
         color='error'
         variant='contained'>

            Decrement</Button>}
            
            </Stack>


    </div>
  )
}

export default CounterTwo