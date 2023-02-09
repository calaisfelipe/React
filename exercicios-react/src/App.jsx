import { useState, useEffect } from 'react'
import './App.css'
import CounterClass from './components/CounterClass'
import WelcomeClass from './components/WelcomeClass'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'


function App() {

  return (
    <div className="App">
    
      <CounterClass />
      <WelcomeClass name="Felipe" lastname="calais" />
      <FunctionClick />
      <ClassClick />

    </div>

    
  )

}

export default App
