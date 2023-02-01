//import { useState } from 'react'
import './App.css'
import Counter from './Components/layout/Counter'
import Title from './Components/layout/title'

import NewYear from './img/NewYear.jpg'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <div className="App" style={{backgroundImage: `url(${NewYear})` }}>
      <div className="container">
          <Title title='Contagem regressiva para 2023' />
          <div className='countdownContainer'>

            <Counter number='00' title='segundos'/>
            <Counter number='00' title='minutos'/>
            <Counter number='00' title='horas'/>
            <Counter number='00' title='dias'/>


          </div>


      </div>

      
      
    </div>
  )
}

export default App
