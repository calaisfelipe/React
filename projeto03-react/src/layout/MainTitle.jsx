import styles from './MainTitle.module.css'

export default function MainTitle({text}) {
  return (
    <div className={styles.tituloContainer}>
        <h1 className={styles.titulo}>{text}</h1>
    </div>
  )
}
