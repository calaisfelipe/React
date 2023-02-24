import React from 'react'
import useCounter from '../Hooks/useCounter'

function CounterOne() {
    

    const [count, increment, decrement, reset ] = useCounter(10, 5)

  return (
    <div>
        <p>Counter: {count} </p>
        <button onClick={increment}>Increase </button>
        <button onClick={decrement}>decrease </button>
        <button onClick={reset}>reset</button>

    </div>
  )
}

export default CounterOne