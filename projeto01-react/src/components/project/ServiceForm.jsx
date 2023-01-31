import { useState } from 'react'
import styles from './FormProjeto.module.css'

import Input from '../form/Input'
import SubmitButton from '../form/SubmitButton'




function ServiceForm({ handleSubmit, btnAlign , projectData}) {

    const [service, setService] = useState({})

    function submit(e) {
        e.preventDefault()
        projectData.services.push(service)
        handleSubmit(projectData)
    }
    
    function handleChange(e) {
        setService( {...service, [e.target.name]: e.target.value })

    }

    return (

        <form onSubmit={submit} className={styles[btnAlign]}>

            <Input name='serviceName'
                labelText='Nome do serviço:'
                Text='Insira o nome do serviço'
                tipo='text'
                handleOnChange={handleChange} />

            <Input name='serviceCost'
                labelText='Custo do serviço:'
                Text='Insira o valor total'
                tipo='number'
                handleOnChange={handleChange} />

            <Input name='serviceDescription'
                labelText='Descrição do serviço:'
                Text='Descreva o serviço'
                tipo='text '
                handleOnChange={handleChange} />

            <div>
                <SubmitButton Text='Adicionar Serviço' />
            </div>

        </form>)




}

export default ServiceForm
