import styles from './Projects.module.css'
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import LinkButton from '../layout/LinkButton'
import Message from '../layout/Message'
import Container from '../layout/Container'
import ProjectCard from '../layout/ProjectCard'
import Loading from '../layout/Loading'



function Projects(){

    const [projects, setProjects] = useState([])
    const [removeLoading, setRemoveLoading] = useState(false)
    const [removeMessage, setRemoveMessage] = useState('')
    
  
    useEffect(() => {
        setTimeout(() => {
        fetch('http://localhost:5000/projects', {
            method: 'GET',
            headers: {'Content-Type' : 'application/json'}
        })
        .then((response) => response.json())
        .then((data) => {
            setProjects(data)
            setRemoveLoading(true)})
        .catch((err) => console.log(err))

    },500)},[])


    function removeProject(id){
        fetch(`http://localhost:5000/projects/${id}`, {
            method: 'DELETE',
            headers: { 
                'content-Type': 'application/json'
            }

        }).then((response) => response.json())
        .then((data) => {
            setProjects(projects.filter((el) => el.id !== id))
            setRemoveMessage('Projeto removido com sucesso!')
        })
        .catch((err) => console.log(err))
    }



  //useLocation não tá funcionando - verificar na web
    const location = useLocation()
    
    let message = ''
    console.log(location.state)
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
                {removeMessage && <Message type='success' msg={removeMessage}/>}
            </div>
            
            <Container customClass="start">
                    
                    {projects.length > 0 &&
                    projects.map((el) => {

                        return(
                           

                            <ProjectCard 
                            id={el.id}
                            name={el.projectName} 
                            budget={el.budget} 
                            categoryName={el.category.name} categoryID={el.category.id}
                            key={el.id}
                            handleRemove={removeProject}/>
                        )
                    })}

                
                    {!removeLoading && (<Loading/>)}
                    {removeLoading && projects.length === 0 && (
                        <p>Não há projetos cadastrados</p>
                    )
                    
                    
                    
                    }
                    
                    


                </Container>
        </div>

        
    )
}

export default Projects