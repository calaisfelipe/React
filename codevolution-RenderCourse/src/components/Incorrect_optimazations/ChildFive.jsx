import React from 'react'

function ChildFive({name, person, handleClick}) {
    const date = new Date()

    console.log('ChildFive Render')
  return (
    <div>
        hello {name} {person.fname} {person.lname}
    </div>
  )
}

export default React.memo(ChildFive)