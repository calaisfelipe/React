import React, { useContext } from 'react'
import { countContext } from '../App'


function ComponentF() {

  const counter = useContext(countContext)

  return (
    <div>ComponentF {counter.countState}

      <button onClick={() => counter.countDispatch('increment')}>Increment</button>

      <button onClick={() => counter.countDispatch('decrement')}>Decrement</button>

      <button onClick={() => counter.countDispatch('reset')}>Reset</button>
    </div>
  )
}

export default ComponentF