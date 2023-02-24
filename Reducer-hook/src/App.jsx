import React, { useReducer } from 'react'
import './App.css'
import CounterOne from './components/CounterOne'
import CounterThree from './components/CounterThree'
import CounterTwo from './components/CounterTwo'

import ComponentA from './components/ComponentA'
import ComponentB from './components/ComponentB'
import ComponentC from './components/ComponentC'

import FetchReducer from './components/FetchReducer'
import Father from './components/Father'


export const countContext = React.createContext()

const initialValue = 0

function reducer(state, action) {
      switch(action){
        case 'increment': 
        return state + 1
        case 'decrement': 
        return state - 1 
        case 'reset': 
        return initialValue
        default:
          return state
      }
}

function App() {

  const [count, dispatch] = useReducer(reducer,initialValue)


  return (
    <div className="App">
      <p>Reducer Hook</p>
      <CounterOne />
      <hr />
      <p>Reducer Hook with Object </p>
      <CounterTwo />
      <hr />
      <CounterThree />
      <hr />
      <p>UseReducer + useContext</p>
      <countContext.Provider value={{countState: count, countDispatch: dispatch}}>

      Count - {count}
      <ComponentA />
      <ComponentB />
      <ComponentC />

      </countContext.Provider>
      <hr />

      <FetchReducer />

      <hr />

      <Father />

      



    </div>
  )
}

export default App
