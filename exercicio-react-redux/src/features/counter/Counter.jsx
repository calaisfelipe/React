import React from 'react'

import {useSelector, useDispatch} from 'react-redux'
import { increase, decrease, reset } from './counterSlicer'

function Counter() {
    const count = useSelector((state) => state.Counter.counter)

    const dispatch = useDispatch()



  return (
    <>
    <div>Counter: {count}</div>
    <button onClick={() => dispatch(increase(1))}>Increase</button>
    <button onClick={() => dispatch(decrease(1))}>decrease</button>
    <button onClick={() => dispatch(reset())}>reset</button>
    
    
    </>
  )
}

export default Counter