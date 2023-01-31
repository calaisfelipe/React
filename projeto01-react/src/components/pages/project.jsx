import styles from './Project.module.css'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { parse, v4 as uuidv4 } from 'uuid'

import FormProjeto from '../project/FormProjeto'
import Loading from '../layout/Loading'
import ButtonCard from '../layout/ButtonCard'
import Message from '../layout/Message'
import ServiceForm from '../project/ServiceForm'




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
        setMessage('')
        
        console.log(project)
        //budget Validation
        if(project.budget < project.costs){
            //mensagem
            setMessage('ERRO - Orçamento do projeto não pode ser menor que seu custo')
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

    function createService(project){
        setMessage('')
       
       const lastService = project.services[project.services.length - 1]
       console.log(lastService)

       lastService.id = uuidv4()
        

        const lastServiceCost = lastService.serviceCost
        console.log(lastServiceCost) 

        const newCost = parseFloat(project.costs) + parseFloat(lastServiceCost)
        console.warn(project.costs)
        console.log('newCost'+ newCost) 

        //maximum value validation

    

       if(newCost > parseFloat(project.budget)){
            setMessage('Orçamento ultrapassado, verifique o valor do serviço')
            setType('error')
            project.services.pop()
            console.error('caiu aqui')
            return false
        }

        //add Service cost to project total cost
        project.costs = newCost

        //update Project

        fetch(`http://localhost:5000/projects/${project.id}` , {
            method: 'PATCH',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(project) 

        })
        .then((response) => response.json())
        .then((data) => {
            console.warn(data)
            setShowServiceForm(false)
            setMessage('Serviço cadastrado')
            setType('success')

            //EXIBIR OS SERVIÇOS


        })
        .catch((err) =>console.log(err))

    }


    return(
        <div className={styles.projectContainer}>
                
            {project ? (
            <div>
                <div className={styles.divMessage}>{message && <Message type={type} msg={message}/>}   
                </div>
                <div className={styles.divContainer}>
                <div className={styles.titleContainer}>
                    
                    <h2>Projeto: {project.projectName}</h2>
                    <ButtonCard theme='dark'
                    text={!showProjectForm ? 'Editar Projeto' : 'Fechar'} 
                    action={toggleProjectForm} />
                </div>
                </div>
                
                {!showProjectForm ? (
                
                <div className={styles.infoContainer}>
                    
                        <p><span>Categoria:</span> {project.category.name}</p>
                        <p><span>Total do orçamento:</span> R${project.budget}</p>
                        <p><span>Total Utilizado:</span> R$0</p>
                        
                   
                </div>) : (<div className={styles.infoContainer}>
                    
                  
                        <FormProjeto handleSubmit={editPost} btnText='Concluir Edição' projectData={project} btnAlign='start' />
                    
                    
                </div>) }
                
                <hr />
                        
                    <div  className={styles.infoContainer}>
                       
                        <div className={styles.titleContainer}>
                            <h3>Adicione um serviço:</h3>
                            <ButtonCard text={!showServiceForm ? 'Adicionar Serviço': 'Fechar' }
                            theme='dark' action={toggleServiceForm}/>
                        </div>

                       {!showServiceForm ? (<div></div>) : 
                       (<ServiceForm btnAlign='start' projectData={project} handleSubmit={createService}/>)
                        }
                        

                        
                        
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
