import React from 'react'
import ComponentE from './ComponentE'

function ComponentC() {
  return (
    <div style={{backgroundColor: 'yellow'}}>
      ComponentC Father
      <ComponentE />
    </div>
  )
}

export default ComponentC