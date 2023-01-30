import { useNavigate } from 'react-router-dom'
import styles from './NewProject.module.css'
import FormProjeto from '../project/FormProjeto'

function NewProject(){

    const navigate = useNavigate()

    function createPost(project){

        //initialize cost and services
        project.costs = 0
        project.services = []

        fetch("http://localhost:5000/projects",{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(project)

        })
        .then((response)=> response.json())
        .then((data) => { console.log(data)
        //redirect
        navigate('/projects', {message: 'Projeto criado com sucesso!'} )}
        )
        .catch((err) = console.log(err))



    }


    return(
        <div className={styles.newProjectContainer}>
            <h1>Criar Projeto</h1>
            
            <p>Crie seu projeto para depois adicionar os serviços</p>

            <FormProjeto handleSubmit={createPost} btnText='Criar Projeto'/>


        </div>

    )
}

export default NewProject