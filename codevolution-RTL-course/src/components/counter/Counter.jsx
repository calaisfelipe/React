import React, { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0)
    const [amount, setAmount] = useState(0)

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount((prevCount) => prevCount + 1)}>Increment</button><br/>

            <input 
            type="number" 
            name="amount" 
            value={amount}
            onChange={(e) => setAmount(parseInt(e.target.value))}
             />

            <button
            onClick={() => setCount(amount)}
            >set</button>



        </div>
    )
}

export default Counter