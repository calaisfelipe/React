import React from 'react'

function ChieldTwo({name}) {
    console.log('ChieldTwo Component')
  return (
    <div>ChieldTwo Component - {name}</div>
  )
}

export default React.memo(ChieldTwo)