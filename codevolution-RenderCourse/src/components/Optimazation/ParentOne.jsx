import React, {useState} from 'react'



function ParentOne({children, newCount}) {
    const [count, setCount] = useState(0)

    console.log('ParentOne Render')
  return (
    <div>
        
        <button onClick={() => setCount(count + 1)}>count: {count}</button>
        {children}
        <p>NewCount: {newCount}</p>
    </div>

  )
}

export default ParentOne