import React from 'react'

function ChildFour({name}) {
    const date = new Date()

    console.log('childFour Render')
  return (
    <div>
        hello {name} . it is currently {date.getHours()}: {date.getMinutes()} : {date.getSeconds()}
    </div>
  )
}

export default React.memo(ChildFour)