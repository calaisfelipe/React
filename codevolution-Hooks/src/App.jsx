import './App.css'
import Counter from './Components/Counter'
import CounterOne from './Components/CounterOne'
import DocTittleOne from './Components/DocTittleOne'
import DocTittleTwo from './Components/DocTittleTwo'
import FocusInput from './Components/FocusInput'
import FormOne from './Components/FormOne'
import Timer from './Components/Timer'

function App() {
  
  return (
    <div className="App">
      <h2>React Hooks</h2>

      <Counter />
      <hr />
      <p>UseRef Hook</p>
      <FocusInput />
      <hr />
      <Timer />
      <hr />
      <p>Custom Hook</p>
      <DocTittleOne />
      <DocTittleTwo />
      <hr />
      <CounterOne />
      <hr />

      <FormOne />
      

    </div>
  )
}

export default App
