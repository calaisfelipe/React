import { useState, useEffect } from 'react'
import './App.css'
import MainTitle from './layout/MainTitle'
import Form from './components/Form'
import SecondaryTitle from './layout/SecondaryTitle'
import TaskCard from './layout/TaskCard'
import Container from './layout/Container'

const API = 'http://localhost:5000'


function App() {
   
const [todos, setTodos] = useState([])
const [loading, setLoading] = useState(false)

useEffect(() => {

  fetch(`${API}/tasks`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json'}
  })
  .then((response) => response.json())
  .then((data) =>{

      console.log(data)
      setTodos(data)


  })
  .catch((err) => console.log(err))



}, [todos])

  return (
    <div className="App">
      <main>
        <MainTitle text='React Todo' />
        <hr></hr>
        <Form control={setTodos} />
        <hr></hr>
        <SecondaryTitle text='Lista de tarefas:'/>

        <Container>

        {todos.length > 0 ? (
        todos.map((todo) => <TaskCard task={todo.taskName} duration={todo.taskDuration} key={todo.id} done={todo.done} />)
          ): <p style={{color: '#fff'}}>Não há tarefa para ser exibida</p>}
        
        
        
       
        </Container >
        



      </main>


    </div>
  )

   



}

export default App
