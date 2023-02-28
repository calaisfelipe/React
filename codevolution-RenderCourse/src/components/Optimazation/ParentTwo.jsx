import React, {useState} from 'react'
import ChieldTwo from './ChildTwo'



function ParentTwo() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    console.log('ParentTwo Render')
  return (
    <div>
        
        <button onClick={() => setCount(count + 1)}>count: {count}</button>
        <button onClick={() => setName('codevolution')}>Change Name</button>

       <ChieldTwo name={name}/>
    </div>

  )
}

export default ParentTwo