import React from 'react'
import ComponentD from './ComponentD'

function ComponentB() {
  return (
    <div style={{backgroundColor: 'red'}}>
      ComponentB Father
      <ComponentD />
    </div>
  )
}

export default ComponentB