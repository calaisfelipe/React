import { useState , useEffect } from 'react'

import styles from './FormProjeto.module.css'
import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'


function FormProjeto({handleSubmit, projectData}) {
    
    const [categories, setCategories] = useState([])
    const [project, setProject] = useState(projectData || {})

    useEffect(() => {
        fetch("http://localhost:5000/categories",{
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
        })
        .then((response) => response.json())
        .then((data) => setCategories(data))
        .catch((err) => console.log(err))
    }, [])
    

    const  submit = (e) => {
        e.preventDefault()
       // console.log(project)
        handleSubmit(project)


    }

            //IMPORTANTE !!
    function handleChange(e){
        setProject({ ...project, [e.target.name]: e.target.value })
        console.log(project)
    }

    function handleCategory(e){
        setProject({ ...project, category:{
           id: e.target.value,
           name: e.target.options[e.target.selectedIndex].text
        } })
        
    }


    return (

        <form onSubmit={submit}>

            <Input name="projectName" 
            labelText="Nome do projeto:" Text="Insira o nome do projeto" tipo="text" handleOnChange={handleChange} value={project.name ? project.name : ''}/>
            

            <Input name="budget" labelText="Orçamento do projeto:" Text="Insira o orçamento total:" tipo="number" handleOnChange={handleChange}
            value={project.budget ? project.budget : ''}/>

            <Select name="budgetType" labelText="Selecione a categoria:" options={categories} 
            handleOnChange={handleCategory}
            value={project.category? project.category.id : ''}/>

            <SubmitButton Text="Criar Projeto" />

        </form>
    )


}


export default FormProjeto 