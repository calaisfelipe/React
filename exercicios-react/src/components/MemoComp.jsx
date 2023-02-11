import React from 'react'

function MemoComp({name}) {
    console.log('rendering MEMO component')
  return (
    <div>MemoComp {name}</div>
  )
}

export default MemoComp