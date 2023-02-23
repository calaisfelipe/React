import { useState } from 'react'
import React from 'react'

function CountState() {

    const [count, setCount] = useState(0)


    function counter(increment) {
  
      setCount(count + increment)
  
    }
  
    function uncounter (){
      setCount(count - 1)
    }
  

  return (
    <div>
        <p>contador: {count}</p>
      <button onClick={() => counter(1)}>Incremento</button>
      <button onClick={uncounter}>Decremento</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => counter(5)}>Incremento 5</button>
    </div>
  )
}

export default CountState