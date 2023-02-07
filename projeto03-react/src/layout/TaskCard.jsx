//import { useEffect } from 'react'
import styles from './TaskCard.module.css'
import { BsFillBookmarkFill, BsTrashFill } from 'react-icons/bs'


export default function TaskCard({ task, duration, id, done, allTasks, tasks }) {

  function removeTask() {
      const tasksUpdate = tasks.filter( (task) => task.id !== id)
      console.log(id)
      console.table(tasks)
      console.table(tasksUpdate)

     fetch(`http://localhost:5000/tasks/${id}`, 
    {
      method:'DELETE',
      headers:{'Content-Type': 'application/json'}
      
    }).then((resp) => resp.json())
    .then((data) => {
      console.log('Enviou pro backend')
      allTasks(tasksUpdate)
      
    })
    .catch((err) => console.log(err))

  }


  return (

    <div className={styles.cardContainer}>
      <h3 className={styles.taskName}>{task}</h3>
      <p className={styles.taskDuration}>Duração:{duration}h</p>

      <div>
        <button className={styles.btnCard}><span><BsFillBookmarkFill /></span></button>
        <button className={styles.btnCard} onClick={removeTask}><span><BsTrashFill /></span></button>
      </div>

    </div>


  )
}
