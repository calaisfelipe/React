import React, {useContext} from 'react'
import { feedbackContext } from '../App'

import styles from './SendFeedback.module.css'
import {BsSend, BsStar ,BsEmojiSmileFill ,BsFillEmojiNeutralFill,BsFillEmojiFrownFill,BsFillEmojiHeartEyesFill } from 'react-icons/bs'
import {AiOutlineUser} from 'react-icons/ai'

import ButtonStep from './ButtonStep'

function SendFeedback() {
    const feedback = useContext(feedbackContext)
    

function sendFeedBack(){

  feedback.feedBackDispatch({type: 'COMPLETE'})

}


function stepBack(){

  feedback.feedBackDispatch({type: 'BACK_AVALIATION'})
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
          <h3>Aqui está o resumo da sua avaliação {feedback.feedback.nome} </h3>

          <div className={styles.infoContainer}>
            <h4>Satisfação com o produto:</h4>
            <p>
              {feedback.feedback.avaliation === '1' && <BsFillEmojiFrownFill />}
              {feedback.feedback.avaliation === '2' && <BsFillEmojiNeutralFill />}
              {feedback.feedback.avaliation === '3' && <BsEmojiSmileFill />}
              {feedback.feedback.avaliation === '4' && <BsFillEmojiHeartEyesFill />}</p></div>


            <div className={styles.infoContainer}>
              <h4>Comentario:</h4><p>{feedback.feedback.comment}</p>
            </div>


        </div>

          
            <div className={styles.btnContainer}>
                <ButtonStep text='Voltar' direction='left' action={stepBack}/>
                <ButtonStep text='Enviar' direction='send' action={sendFeedBack}/>
            </div>

    </div>
  )
}

export default SendFeedback