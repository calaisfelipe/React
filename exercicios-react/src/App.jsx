import { useState, useEffect } from 'react'
import './App.css'


function App() {

const [count, setCount ] = useState(0)

useEffect( 
    () => { console.log('Pagina carregada')

        window.document.title = count

    },[count])




  return (
    <div className="App">
        <p>Contagem: {count}</p>
        <button onClick={(e) => setCount(count + 1)} >Clique aqui</button>
    </div>
  )

}

export default App
