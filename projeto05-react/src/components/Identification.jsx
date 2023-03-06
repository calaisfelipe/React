import React, {useContext, useState} from 'react'
import { feedbackContext } from '../App'

import styles from './Identification.module.css'
import {BsSend, BsStar } from 'react-icons/bs'
import {AiOutlineUser} from 'react-icons/ai'

import ButtonStep from './ButtonStep'

function Identification() {
    const feedback = useContext(feedbackContext)
    const [user, setUser] = useState('')
    const [email, setEmail] = useState('')

 
function nextStep(e){
    e.preventDefault()
    feedback.feedBackDispatch({type: 'NEXT', user: user, userEmail: email})

}



  return (
    <div className={styles.identificationContainer}>

        <div className={styles.statusContainer}>

            <div className={`${styles.status} ${styles.active}`}>
                <span><AiOutlineUser /></span>
                <p >Identificação</p>
            </div>

            <div className={styles.status}>
                <span><BsStar /></span>
                <p>Avaliação</p>
            </div>

            <div className={styles.status}>
                <span><BsSend /></span>
                <p>Envio</p>
            </div>

        </div>

        <form onSubmit={nextStep} className={styles.formContainer}>
            <label htmlFor="userName">
                Nome:<br /><input type="text" name="userName" id="userName" required placeholder='Digite o seu nome' onChange={(e) => setUser(e.target.value)}/>

            </label>

            <label htmlFor="userEmail">
                E-mail:<br /> <input type="email" name="userName" id="userEmail" required placeholder='Digite o seu e-mail' onChange={(e) => setEmail(e.target.value)}/>

            </label>

      
                <ButtonStep  text='Avançar' direction='right' />
            

        </form>

        
    </div>
  )
}

export default Identification