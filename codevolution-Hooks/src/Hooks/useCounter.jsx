import {useState} from 'react'

function useCounter(initialCount = 0, value) {

    const [count, setCount] = useState(initialCount)

    function increment(){
     setCount(count + value)
    
    }
    
    function decrement(){
        setCount(count - value)
    }
    
    function reset(){
        setCount(initialCount)
    }

  return [count, increment, decrement, reset]
}

export default useCounter