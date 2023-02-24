import React from 'react'
import CounterOne from './CounterOne'
import CounterTwo from './CounterTwo'
import CounterThree from './CounterThree'

function Father() {
  return (
    <div>
        <CounterOne />
        <CounterThree />
        <CounterTwo />
    </div>
  )
}

export default Father