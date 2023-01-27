import styles from './NewProject.module.css'
import FormProjeto from '../project/FormProjeto'

function NewProject(){
    return(
        <div className={styles.newProjectContainer}>
            <h1>Criar Projeto</h1>
            
            <p>Crie seu projeto para depois adicionar os serviços</p>

            <FormProjeto />


        </div>

    )
}

export default NewProject