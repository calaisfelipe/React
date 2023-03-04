import React, {useContext} from 'react'
import { feedbackContext } from '../App'

import styles from './SendFeedback.module.css'
import {BsSend, BsStar ,BsEmojiSmileFill ,BsFillEmojiNeutralFill,BsFillEmojiFrownFill,BsFillEmojiHeartEyesFill } from 'react-icons/bs'
import {AiOutlineUser} from 'react-icons/ai'

import ButtonStep from './ButtonStep'

function SendFeedback() {
    const feedback = useContext(feedbackContext)


function nextStep(){

    feedback.feedBackDispatch({type: 'NEXT',})

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

            <div className={`${styles.status} ${styles.active}`}>
                <span><BsSend /></span>
                <p>Envio</p>
            </div>

        </div>

        <div className={styles.descricaoContainer}>
          <h2>Falta Pouco...</h2>
          <p>A sua opinião é muito importante. Em breve você receberá um cupom de descontos de 10% para sua próxima compra.
            Para concluir sua avaliação clique no botão enviar abaixo.
          </p>
        </div>

        <div className={styles.resumoContainer}>
          <h3>Aqui está o resumo da sua avaliação {feedback.name} </h3>
            <h4>Satisfação com o produto:</h4><p>{feedback.avaliation}</p>
            <h4>Comentario:</h4><p>{feedback.comment}</p>


        </div>

          
            <div className={styles.btnContainer}>
                <ButtonStep text='Voltar' direction='left'/>
                <ButtonStep text='Enviar' direction='send' action={nextStep}/>
            </div>

    </div>
  )
}

export default SendFeedback