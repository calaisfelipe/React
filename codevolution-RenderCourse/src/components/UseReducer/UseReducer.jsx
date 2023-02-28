import React, {useReducer} from 'react'

const initalValue = 0

function reducer(state, action){
        switch(action){
            case 'increment':
                return state + 1
            case 'decrement':
                return state - 1
            case 'reset':
                    return initalValue
            case 'sameValue':
                    return 0

            default:
                return state
        }
}

const UseReducer = () => {
    
    const [count, dispatch] = useReducer(reducer, initalValue)

    
    console.log('UseReducer Render')
  return (
    <div>
        <p>{count}</p>
        <button onClick={() => dispatch
        ('increment')}>Increment</button>
        <button onClick={() => dispatch
        ('decrement')}>decrement</button>
        <button onClick={() => dispatch
        ('reset')}>reset</button>
        <button onClick={() => dispatch
        ('sameValue')}>zero</button>
    </div>
  )
}

export default UseReducer