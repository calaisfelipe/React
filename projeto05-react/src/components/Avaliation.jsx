import React, {useContext} from 'react'
import { feedbackContext } from '../App'

import styles from './Avaliation.module.css'
import {BsSend, BsStar ,BsEmojiSmileFill ,BsFillEmojiNeutralFill,BsFillEmojiFrownFill,BsFillEmojiHeartEyesFill } from 'react-icons/bs'
import {AiOutlineUser} from 'react-icons/ai'

import ButtonStep from './ButtonStep'

function Avaliation() {
    const feedback = useContext(feedbackContext)


function nextStep(){

    feedback.feedBackDispatch({type: 'NEXT_END',})


}


  return (
    <div className={styles.AvaliationContainer}>

        <div className={styles.statusContainer}>

            <div className={`${styles.status} ${styles.active}`}>
                <span><AiOutlineUser /></span>
                <p >Identificação</p>
            </div>

            <div className={`${styles.status} ${styles.active}`}>
                <span><BsStar /></span>
                <p>Avaliação</p>
            </div>

            <div className={styles.status}>
                <span><BsSend /></span>
                <p>Envio</p>
            </div>

        </div>

        <div className={styles.avaliationContainer}>

          <div className={styles.avaliationItem}>
            <label htmlFor="avaliation1">
              <span><BsFillEmojiFrownFill /></span>
              <input type="radio" name="avaliation" id="avaliation1" />
              <p>insatisfeito</p>
              </label>
          </div>
          
          <div className={styles.avaliationItem}>
            <label htmlFor="avaliation2">
            <span><BsFillEmojiNeutralFill/></span>
              <input type="radio" name="avaliation" id="avaliation2" />
              <p>poderia ser melhor</p>
              </label>
          </div>

          <div className={styles.avaliationItem}>
            <label htmlFor="avaliation3">
            <span><BsEmojiSmileFill/></span>
              <input type="radio" name="avaliation" id="avaliation3" />
              <p>satisfeito</p>
            </label>
          </div>

          <div className={styles.avaliationItem}>
            <label htmlFor="avaliation4">
            <span><BsFillEmojiHeartEyesFill/></span>
              <input type="radio" name="avaliation" id="avaliation4" />
              <p>muito satisfeito</p></label>
              
          </div>


        </div>

          <div className={styles.feedbackAreaContainer}>
            <label htmlFor="feedbackArea">
              Comentario:<br/>
              <textarea name="feedbackArea" id="feedbackArea" cols="40" rows="8" placeholder='Conte como foi sua experiencia com o produto'></textarea>
            </label>
          </div>


            <div className={styles.btnContainer}>
                <ButtonStep text='Voltar' direction='left'/>
                <ButtonStep text='Avançar' direction='right' action={nextStep}/>
            </div>

    </div>
  )
}

export default Avaliation