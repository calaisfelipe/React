import React, { useContext } from 'react'
import { countContext } from '../App'


function ComponentD() {
  const counter = useContext(countContext)

  return (
    <div>ComponentD {counter.countState}
      <button onClick={() => counter.countDispatch('increment')}>Increment</button>

      <button onClick={() => counter.countDispatch('decrement')}>Decrement</button>

      <button onClick={() => counter.countDispatch('reset')}>Reset</button>

    </div>
  )
}

export default ComponentD