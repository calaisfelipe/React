import { useState, useEffect } from 'react'
import './App.css'
//import CounterClass from './components/CounterClass'
//import WelcomeClass from './components/WelcomeClass'
//import FunctionClick from './components/FunctionClick'
//import ClassClick from './components/ClassClick'
//import EventBind from './components/EventBind'
//import ParentComponent from './components/ParentComponent'
//import UserGreetings from './components/UserGreetings'
//import ListRendering from './components/ListRendering'
//import Stylesheet from './components/Stylesheet'
//import Inline from './components/Inline'
//import PureComp from './components/PureComp'
//import ParentComp from './components/ParentComp'
//import RefsExample from './components/RefsExample'
//import FRParent from './components/FRParent'
//import PortalDemo from './components/PortalDemo'
//import ClickCounterTwo from './components/ClickCounterTwo'
//import HoverCounterTwo from './components/HoverCounterTwo'
//import User from './components/User'
//import Counter from './components/Counter'
import ComponentC from './Context/ComponentC'
import { UserProvider } from './Context/UserContext'


function App() {

  return (
    <div className="App">

      <UserProvider value='Teste'>

      <ComponentC />

      </UserProvider>



    </div>

    
  )

}

export default App
