import styles from './CardMovie.module.css'
import {BsStarFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'


export default function CardMovie({title,poster,stars,id, showLink = true}) {
  return (
    <div className={styles.container}>

        <Link to={`/movie/${id}`}>
          <img src={`https://image.tmdb.org/t/p/w500/${poster}`} alt={title} /> </Link>

        <div className={styles.containerTitle}>

          
            <p className={styles.title}>{title}</p>
            <span className={styles.average}><BsStarFill/> {stars}</span>
          

        </div>


    </div>
  )
}
