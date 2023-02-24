import React, { useEffect, useState} from 'react'

function HookCounterThree() {
    const [count, setCount] = useState(0)
    const [stop, setStop] = useState(true)

useEffect(() =>{
    
    
    function tick() {
        setCount(count + 1)
    }   

const interval = setInterval(tick , 1000)
console.log('interval')

return () => { 
    clearInterval(interval) 
}

}, [])

function stopInterval() {

    setStop(!stop)
}

  return (
    <div>
        {stop ? (count) : ''}
    <button onClick={stopInterval}>Stop</button>
    </div>
    
  )
}

export default HookCounterThree