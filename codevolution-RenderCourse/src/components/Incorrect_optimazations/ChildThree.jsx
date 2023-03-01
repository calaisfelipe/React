import React from 'react'

function ChildThree({children, name}) {
    console.log('ChildThree Component')
  return (
    <div>ChildThree Component - 
    {children} {name} </div>
  )
}

export default React.memo(ChildThree)