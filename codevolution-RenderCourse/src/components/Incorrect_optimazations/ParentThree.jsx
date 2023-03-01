import React, {useState} from 'react'
import ChildFour from './ChildFour'





function ParentThree() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    console.log('ParentThree Render')
  return (
    <div>
        
        <button onClick={() => setCount(count + 1)}>count: {count}</button>
        <button onClick={() => setName('codevolution')}>Change Name</button>

        <ChildFour name={name} />

      

    </div>

  )
}

export default ParentThree