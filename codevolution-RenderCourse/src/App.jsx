import './App.css'
import ContextParent from './components/context/ContextParent'
import { ChildA } from './components/context/ContexChild'



function App() {
  

  return (
    <div className="App">
      <h1>React Render Course</h1>

   
      <ContextParent >
        <ChildA />
      </ContextParent>
    
     
     
     
      
    </div>
  )
}

export default App
