import styles from './Home.module.css'

import saving from '../../img/saving.svg'
import LinkButton from '../layout/LinkButton'


function Home() {
    return (
        <section className={styles.homeContainer}>

            <h1>Bem vindo ao <span className={styles.spanLogo}>Costs</span></h1>
            <p className={styles.pTitle}>Comece a gerenciar os seus projetos agora mesmo</p>

            <LinkButton to="/newproject" text="Criar projeto" />

            <img className={styles.imgHome} src={saving} alt="Costs animation" />


        </section>

    )
}

export default Home