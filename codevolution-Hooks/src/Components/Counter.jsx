import React, {useState , useMemo} from 'react'


function Counter() {
    const [counterOne, setCounterOne] = useState(0)
    const [counterTwo, setCounterTwo] = useState(0)

function incrementOne() {
    setCounterOne(counterOne + 1)
}

function incrementTwo() {
    setCounterTwo(counterTwo + 2)
    
}

const isEven = useMemo( () => {
   
    let i = 0
    while (i < 200000000) i++ //delay
    return counterOne % 2 === 0
}, [counterOne] )



  return (
    <div>
        <p>counter1: {counterOne}</p>
        <button onClick={incrementOne}>Increment 1</button>
        <p>{isEven ? 'Even' : 'odd'}</p>

        <p>counter2: {counterTwo}</p>
        <button onClick={incrementTwo}>Increment 2</button>


    </div>
  )
}

export default Counter