import { useState, useEffect } from 'react'
import './App.css'
import MainTitle from './layout/MainTitle'
import Form from './components/Form'
import SecondaryTitle from './layout/SecondaryTitle'
import TaskCard from './layout/TaskCard'
import Container from './layout/Container'
import Loading from './components/Loading'

import LoadingData from './hook/LoadingData'


function App() {
   



const [todos, setTodos] = useState([])
const [loading, setLoading] = useState(false)

/*
const loadData = async() => {

  setLoading(true)

  await fetch(`${API}/tasks`, {
  method: 'GET',
  headers: { 'Content-Type': 'application/json'}
})
.then((response) => response.json())
.then((data) =>{

    console.log('fetch rolando')    
    setTodos(data)
    
    
  
})
.catch((err) => console.log(err))

}*/


  return (
   
    <div className="App">
       {LoadingData(setTodos, setLoading)}
      <main>
        <MainTitle text='React Todo' />
        <hr></hr>
        <Form control={setTodos} loader={loadData}/>
        <hr></hr>
        <SecondaryTitle text='Lista de tarefas:'/>

        <Container>
        {!loading && <Loading />}

        {todos.length === 0 && <p style={{color: '#fff'}}>Não há tarefa para ser exibida</p>}

        { 
        loading && todos.length > 0 && (
        todos.map((todo) => <TaskCard task={todo.taskName} duration={todo.taskDuration} key={todo.id} id={todo.id} done={todo.done} allTasks={setTodos} tasks={todos} loader={loadData}/>)
        ) }
        
        </Container >

        
        



      </main>


    </div>

    
    
  )

   



}

export default App
