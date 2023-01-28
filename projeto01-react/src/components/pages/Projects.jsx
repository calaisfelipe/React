import styles from './Projects.module.css'
import { useLocation } from 'react-router-dom'
import LinkButton from '../layout/LinkButton'
import Message from '../layout/Message'
import Container from '../layout/Container'

function Projects(){

    const location = useLocation()
    let message = ''
    
    if(location.state){
        message = location.state.message
    }

    return(
        <div className={styles.projectsContainer}>
            <div className={styles.titleContainer}>
                <h1>Meus Projetos</h1>
                <LinkButton to='/newproject' text='Criar projeto'/>
            </div>

            <div>
                {message && <Message type='success' msg={message}/>}
            </div>
            <Container customClass="start">
                    <p>Exemplo projeto</p>


                </Container>
        </div>

        
    )
}

export default Projects