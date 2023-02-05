import { useState} from 'react'
import SecondaryTitle from '../layout/SecondaryTitle'
import Input from '../layout/Input'
import styles from '../components/Form.module.css'

export default function Form({control}) {

  const API = 'http://localhost:5000'

  const [title, setTitle] = useState('')
  const [time, setTime] = useState('')


function getTask(e){
  e.preventDefault()
  
  const todo = {

    id: Math.floor(Math.random()*1000),
    taskName: title,
    taskDuration: time,
    done: false

  }

  setTitle('')
  setTime('')
 

  fetch(`${API}/tasks`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify(todo)

  })
  .then((response) => response.json())
  .then((data) => {
    console.log(data)
    control(data)
  
  }
  )
  .catch((err) => console.log(err))

}

  return (
    <div>
        <SecondaryTitle text='Insira sua próxima tarefa:' />

        <form  onSubmit={getTask}>
            <Input txtlabel='O que você vai fazer?' type='text' placeholderText='Titulo da tarefa' name='taskName' action={setTitle} content={title}/>

            <Input txtlabel='Duração:' type='number' placeholderText='Tempo estimado (em horas)' name='taskDuration' action={setTime} content={time}/>

            <div className={styles.btnContainer}>

                <input className={styles.btnForm} type="submit" value="Criar Tarefa" />
                
            </div>



            
        </form>

    </div>
  )
}
