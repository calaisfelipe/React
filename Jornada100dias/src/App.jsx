import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [nome, setNome]  = useState('Jorge')
 

  function clicar(){
     setCount(count + 1)
  }

  return (
    <div className="App">

    <h1>Projeto 100 dias</h1>
      <p>{count}</p>
      <button type='button' onClick={clicar}>Clique aqui</button><br />

      <input type="text" name="iname" id="iname" onChange={(e) => setNome(e.target.value)}/>
      <p>{nome}</p>

    </div>
  )
}

export default App
