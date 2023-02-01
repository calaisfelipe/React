import styles from './Project.module.css'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { parse, v4 as uuidv4 } from 'uuid'

import FormProjeto from '../project/FormProjeto'
import Loading from '../layout/Loading'
import ButtonCard from '../layout/ButtonCard'
import Message from '../layout/Message'
import ServiceForm from '../project/ServiceForm'
import Container from '../layout/Container'
import ServiceCard from '../layout/ServiceCard'


function Project() {

    const { id } = useParams()


    const [project, setProject] = useState('')
    const [showProjectForm, setShowProjectForm] = useState(false)
    const [showServiceForm, setShowServiceForm] = useState(false)
    const [message, setMessage] = useState()
    const [type, setType] = useState()

    const [services, setServices] = useState('')



    useEffect(() => {
        setTimeout(() => {
            fetch(`http://localhost:5000/projects/${id}`, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' }
            })
            .then((response) => response.json())
            .then((data) => {
                setProject(data)
                console.log(project)
                setServices(data.services)
            })
            .catch((err) => console.log(err))
        }, 500)

    }, [id])



    function editPost(project) {
        setMessage('')

        console.log(project)
        //budget Validation
        if (project.budget < project.costs) {
            //mensagem
            setMessage('ERRO - Orçamento do projeto não pode ser menor que seu custo')
            setType('error')
            return false
        }

        fetch(`http://localhost:5000/projects/${project.id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
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


    function toggleProjectForm() {
        setShowProjectForm(!showProjectForm)
    }

    function toggleServiceForm() {
        setShowServiceForm(!showServiceForm)
    }


    function removeService(id, cost){
        
        const servicesUpdate = project.services.filter(
            (service) => service.id !== id
        )

        const projectUpdated = project

        projectUpdated.services = servicesUpdate
        projectUpdated.costs = parseFloat(projectUpdated.costs) - parseFloat(cost)

        

        fetch(`http://localhost:5000/projects/${projectUpdated.id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(projectUpdated)


        }).then((response) => response.json())
        .then((data) => {
        
        console.log(data)
        setProject(projectUpdated)
        setServices(servicesUpdate)
        setMessage('Serviço excluido com sucesso')
        setType('success') 
    
    
    })
        .catch((err) => console.log(err))

  
    }

    function createService(project) {
        setMessage('')

        const lastService = project.services[project.services.length - 1]
        console.log(lastService)

        lastService.id = uuidv4()


        const lastServiceCost = lastService.serviceCost
   
        const newCost = parseFloat(project.costs) + parseFloat(lastServiceCost)
      

        //maximum value validation

        if (newCost > parseFloat(project.budget)) {
            setMessage('Orçamento ultrapassado, verifique o valor do serviço')
            setType('error')
            project.services.pop()
            console.error('caiu aqui')
            return false
        }

        //add Service cost to project total cost
        project.costs = newCost

        //update Project

        fetch(`http://localhost:5000/projects/${project.id}`, {
            method: 'PATCH',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(project)

        })
            .then((response) => response.json())
            .then((data) => {
                console.warn(data)
                setShowServiceForm(false)
                setMessage('Serviço cadastrado')
                setType('success')

                setServices(data.services)


            })
            .catch((err) => console.log(err))

    }


    return (
        <div className={styles.projectContainer}>

            {project ? (
                <div>
                    <div className={styles.divMessage}>{message && <Message type={type} msg={message} />}
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
                            <p><span>Total do orçamento:</span> R$ {project.budget}</p>
                            <p><span>Total Utilizado:</span> R$ {project.costs}</p>


                        </div>) : (<div className={styles.infoContainer}>


                            <FormProjeto handleSubmit={editPost} btnText='Concluir Edição' projectData={project} btnAlign='start' />


                        </div>)}

                    <hr />

                    <div className={styles.infoContainer}>

                        <div className={styles.titleContainer}>
                            <h3>Adicione um serviço:</h3>
                            <ButtonCard text={!showServiceForm ? 'Adicionar Serviço' : 'Fechar'}
                                theme='dark' action={toggleServiceForm} />
                        </div>

                        {!showServiceForm ? (<div></div>) :
                            (<ServiceForm btnAlign='start' projectData={project} handleSubmit={createService} />)
                        }


                    </div>

                    <hr />


                    <div className={styles.infoContainer}>

                        <div>
                            <h3>Serviços:</h3>
                        </div>

                        <Container customClass='start'>

                        {services.length > 0  ? (services.map((el) =>{

                                return(

                                    <ServiceCard name={el.serviceName} cost={el.serviceCost} description={el.serviceDescription } id={el.id} 
                                    handleRemove={removeService}/>

                                )}
                            )) : ( <div>Não existem serviços cadastrados.</div>)
                        }

                        </Container>


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
