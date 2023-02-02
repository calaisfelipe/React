import { useState } from 'react'
import './App.css'
import Nota from './components/Nota'
import Resultado from './components/Resultado'
import Container from './components/Container'

function App() {

const [notas, setNotas ] = useState({'nota1': '0', 'nota2' : '0', 'nota3': '0', 'nota4': '0'})

function handleSetNotas(e){

if(e.target.value === ''){
  e.target.value = 0
  setNotas({...notas, [e.target.name] : e.target.value})
}else {  
setNotas({...notas, [e.target.name] : e.target.value})
}
console.log(notas)

}
 
  return (
    <div className="App">
      <Container custom='horizontal'>
        <Nota num={1} nota={notas.nota1} handleNota={handleSetNotas}/>
        <Nota num={2} nota={notas.nota2} handleNota={handleSetNotas}/>
        <Nota num={3} nota={notas.nota3} handleNota={handleSetNotas}/>
        <Nota num={4} nota={notas.nota4} handleNota={handleSetNotas}/>
      </Container>
      
      <Resultado soma={parseFloat(notas.nota1) + parseFloat(notas.nota2) +parseFloat(notas.nota3) + parseFloat(notas.nota4)}/>
    </div>
  )
}

export default App
