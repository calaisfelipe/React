import styles from './TaskCard.module.css'
import {BsFillBookmarkFill,BsTrashFill } from 'react-icons/bs'


export default function TaskCard({task,duration,key,done}) {

  return (

    <div className={styles.cardContainer}>
        <h3 className={styles.taskName}>{task}</h3>
        <p className={styles.taskDuration}>Duração:{duration}h</p>

        <div>
            <button className={styles.btnCard}><span><BsFillBookmarkFill/></span></button>
            <button className={styles.btnCard}><span><BsTrashFill/></span></button>
        </div>

    </div>


  )
}
