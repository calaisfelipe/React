import loading from '../../img/loading.svg'
import styles from './Loading.module.css'

function Loading(){

    return(
        <div className={styles.loadingContainer}>
            <img className={styles.loading} src={loading} alt="Carregando" />
        </div>

    )
}

export default Loading