import React, {useContext} from 'react'
import { feedbackContext } from '../App'

import styles from './Identification.module.css'
import {BsSend, BsStar } from 'react-icons/bs'
import {AiOutlineUser} from 'react-icons/ai'

import ButtonStep from './ButtonStep'

function Identification() {
    const feedback = useContext(feedbackContext)


function nextStep(){

    feedback.feedBackDispatch({type: 'NEXT',})


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

        <form className={styles.formContainer}>
            <label htmlFor="userName">
                Nome:<br /><input type="text" name="userName" id="userName" required placeholder='Digite o seu nome'/>

            </label>

            <label htmlFor="userEmail">
                E-mail:<br /> <input type="email" name="userName" id="userEmail" required placeholder='Digite o seu e-mail'/>

            </label>


        </form>

            <div className={styles.btnContainer}>
                <ButtonStep text='Voltar' direction='left'/>
                <ButtonStep text='Avançar' direction='right' action={nextStep}/>
            </div>

    </div>
  )
}

export default Identification