import styles from './Project.module.css'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import FormProjeto from '../project/FormProjeto'
import Loading from '../layout/Loading'
import ButtonCard from '../layout/ButtonCard'
import Message from '../layout/Message'

function Project(){

    const { id } = useParams()
  

    const [project, setProject] = useState('')
    const [showProjectForm , setShowProjectForm] = useState(false)
    const [showServiceForm , setShowServiceForm] = useState(false)
    const [message, setMessage] = useState()
    const [type, setType] = useState()



    useEffect(() => { 
       setTimeout( () => {fetch(`http://localhost:5000/projects/${id}`, {
            method: 'GET',
            headers: { 'Content-Type' : 'application/json'}
        })
        .then((response) => response.json())
        .then((data) => { setProject(data)
            console.log(project) } )
        .catch((err) => console.log(err))} , 500)

    }, [id])

    function editPost(project){
        
        console.log(project)
        //budget Validation
        if(project.budget < project.cost){
            //mensagem
            setMessage('ERRO - Orçamento do projeto não pode ser menor que seu cursto')
            setType('error')
            return false
        }

        fetch(`http://localhost:5000/projects/${project.id}`, {
            method: 'PATCH',
            headers: { 'Content-Type' : 'application/json'},
            body: JSON.stringify(project)

        }).then((response) => response.json())
        .then((data) => {
            setProject(data)
            setShowProjectForm(false)
            //mensagem
            setMessage('Projeto atualizado com sucesso')
            setType('success')
        
        })
        .catch((err) => console.log(err))



    }


    function toggleProjectForm(){
        setShowProjectForm(!showProjectForm)
    }

    function toggleServiceForm(){
        setShowServiceForm(!showServiceForm)
    }


    return(
        <div className={styles.projectContainer}>
                
            {project ? (
            <div>
                <div className={styles.divMessage}>{message && <Message type={type} msg={message}/>}   </div>
                <div className={styles.divContainer}>
                <div className={styles.titleContainer}>
                    
                    <h2>Projeto: {project.projectName}</h2>
                    <ButtonCard theme='dark'
                    text={!showProjectForm ? 'Editar Projeto' : 'Fechar'} 
                    action={toggleProjectForm} />
                </div>
                </div>
                
                {!showProjectForm ? (<div className={styles.infoContainer}>
                    <p><span>Categoria:</span> {project.category.name}</p>
                    <p><span>Total do orçamento:</span> R${project.budget}</p>
                    <p><span>Total Utilizado:</span> R$0</p>
                    
                </div>) : (<div className={styles.infoContainer}>
                    <FormProjeto handleSubmit={editPost} btnText='Concluir Edição' projectData={project} />
                    
                </div>) }
                
                <hr />

                <div className={styles.divContainer}>
                    <div className={styles.titleContainer}>
                        <h3>Adicione um serviço:</h3>

                        <ButtonCard text={!showServiceForm ? 'Adicionar Serviço': 'Fechar'}
                        theme='dark' action={toggleServiceForm}/>
                        
                    </div>
                    
                </div>
                <hr />
                

                    <div className={styles.divContainer}>

                    <div>
                        <h3>Serviços:</h3>
                        <p>Não há serviços cadastrados</p>
                    </div>


                    </div>


                </div>
                
            ) : <div></div>}
            
            {!project && (
                <Loading />
            )}

            
            </div>


        

    )





}

export default Project

/*{project.lenght > 0 && (

            <div>
                <div>
                <h2>Projeto: {project.projectName}</h2>
                    <LinkButton to='' text='Editar Projeto'/>
                </div>
                
                <div>
                    <p>Categoria:{project.category.name}</p>
                    <p>Total do orçamento: R${project.budget}</p>
                    <p>Total Utilizado: R$0</p>
                </div>*/