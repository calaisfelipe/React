import React, { useState} from 'react'
import ChieldOne from './ChieldOne'
import ParentOne from './ParentOne'

function GrandParent() {
    const [count, setCount] = useState(0)


    console.log('Grandparent Render')
  return (
    <div>
        GrandParent

        <button onClick={() => setCount(count + 1)}>GrandParent Count: {count} </button>

        <ParentOne newCount={count}>
            <ChieldOne />
        </ParentOne>
        

    </div>
  )
}

export default GrandParent