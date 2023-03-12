
import './App.css'

import NameView from './features/name/NameView'
import ChangeNameView from './features/name/ChangeNameView'
import Counter from './features/counter/Counter'


function App() {
  

  return (
    <div className="App">
      <NameView />
      <ChangeNameView />
      <hr />
      <Counter />
    </div>
  )
}

export default App
