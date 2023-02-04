import styles from './SecondaryTitle.module.css'

export default function SecondaryTitle({text}) {
  return (
    <div className={styles.tituloContainer}>
        <h2 className={styles.titulo}>{text}</h2>
    </div>
  )
}
