import React, { useState } from 'react'
import './App.css'
import ButtonFetching from './components/ButtonFetching'
import ComponentC from './components/ComponentC'
import CountState from './components/CountState'
import CountStateThree from './components/CountStateThree'
import CountStateTwo from './components/CountStateTwo'
import DataFetching from './components/DataFetching'
import FetchPost from './components/FetchPost'
import HookCounterOne from './components/HookCounterOne'
import HookCounterThree from './components/HookCounterThree'
//import HookCounterTwo from './components/HookCounterTwo'
import MouseContainer from './components/MouseContainer'


export const userContext = React.createContext()
export const ChannelContext = React.createContext()


function App() {

  return (
    <div className="App">
      <h1>Curso de Hooks</h1>
      <CountState />
      <hr />
      <CountStateTwo />
      <hr />
      <CountStateThree />
      <hr />
      <HookCounterOne />
      <hr />
      <MouseContainer />
      <hr />
      <HookCounterThree />
      <hr />
      <DataFetching />
      <hr />
      <FetchPost />
      <hr />
      <ButtonFetching />
      <hr />
      <p>UseContenxt exemplo</p>
      <userContext.Provider value={'Calais'}>
      <ChannelContext.Provider value={'Felipe'}>

      <ComponentC />

      </ChannelContext.Provider>
      </userContext.Provider>
      <hr />

      
      
    </div>
  )
}

export default App
