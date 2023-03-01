import React, {useState, useMemo, useCallback} from 'react'
import ChildFive from './ChildFive'



function ParentFour() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    const person = {
        fname: 'bruce',
        lname: 'Wayne'
    }

    const handleClick = ( ) => { }

    const memoizedPerson = useMemo(() => person, [])

    const callbackHandleClick = useCallback(() => handleClick, [])


    console.log('ParentFour Render')
  return (
    <div>
        
        <button onClick={() => setCount(count + 1)}>count: {count}</button>
        <button onClick={() => setName('codevolution')}>Change Name</button>

        <ChildFive name={name} person={memoizedPerson} handleClick={callbackHandleClick} />

      

    </div>

  )
}

export default ParentFour