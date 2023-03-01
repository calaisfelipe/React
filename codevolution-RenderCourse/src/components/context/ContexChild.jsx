import React, {useContext} from 'react'
import { parentContext } from './ContextParent'


export const ChildA = () => {
    console.log('Child A render')
  return (
    <div>Child A
        <ChildB />
    </div>
  )
}


export const ChildB = () => {
    console.log('Child B render')
    return (
      <div>Child B
        <ChildC />
      </div>
    )
  }


export const ChildC = () => {

    const counter = useContext(parentContext)

    console.log('Child C render')
    return (
      <div>Child C {counter} </div>
    )
  }
  
