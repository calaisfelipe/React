import React, {useContext, useState} from 'react'
import { feedbackContext } from '../App'

import styles from './Avaliation.module.css'
import {BsSend, BsStar ,BsEmojiSmileFill ,BsFillEmojiNeutralFill,BsFillEmojiFrownFill,BsFillEmojiHeartEyesFill } from 'react-icons/bs'
import {AiOutlineUser} from 'react-icons/ai'

import ButtonStep from './ButtonStep'

function Avaliation() {
    const feedback = useContext(feedbackContext)
    const [avaliationComment , setAvaliationComment] = useState('') 
    const [avaliationEmoji, setAvaliationEmoji] = useState({avaliation1:false, avaliation2:false ,avaliation3:false ,avaliation4:false , value: 0})
    
   

function nextStep(e){
    e.preventDefault()
    feedback.feedBackDispatch({type: 'NEXT_END' , comment: avaliationComment, avaliation: avaliationEmoji})


}

function stepBack(){

  feedback.feedBackDispatch({type: 'BACK_BEGIN',})


}

function handleEmoji(e){
  
  

  setAvaliationEmoji({[e.target.id] : true , value : e.target.value })



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

        <form onSubmit={nextStep} >
        <div className={styles.avaliationContainer}>

          <div className={styles.avaliationItem}>
            <label htmlFor="avaliation1">
              <span style={avaliationEmoji.avaliation1 ? {color: 'blueviolet'} : {color: 'black'}} ><BsFillEmojiFrownFill /></span>
              <input type="radio" name="avaliation" id="avaliation1" required value='1' onInput={handleEmoji}/>
              <p>insatisfeito</p>
              </label>
          </div>
          
          <div className={styles.avaliationItem}>
            <label htmlFor="avaliation2">
            <span style={avaliationEmoji.avaliation2 ? {color: 'blueviolet'} : {color: 'black'}}><BsFillEmojiNeutralFill/></span>
              <input type="radio" name="avaliation" id="avaliation2" required value='2' onInput={handleEmoji}/>
              <p>poderia ser melhor</p>
              </label>
          </div>

          <div className={styles.avaliationItem}>
            <label htmlFor="avaliation3">
            <span style={avaliationEmoji.avaliation3 ? {color: 'blueviolet'} : {color: 'black'}}><BsEmojiSmileFill/></span>
              <input type="radio" name="avaliation" id="avaliation3" required value='3' onInput={handleEmoji}/>
              <p>satisfeito</p>
            </label>
          </div>

          <div className={styles.avaliationItem}>
            <label htmlFor="avaliation4">
            <span style={avaliationEmoji.avaliation4 ? {color: 'blueviolet'} : {color: 'black'}}><BsFillEmojiHeartEyesFill/></span>
              <input type="radio" name="avaliation" id="avaliation4" required value='4' onInput={handleEmoji}/>
              <p>muito satisfeito</p></label>
              
          </div>


        </div>

          <div className={styles.feedbackAreaContainer}>
            <label htmlFor="feedbackArea">
              Comentario:<br/>
              <textarea name="feedbackArea" id="feedbackArea" cols="40" rows="8" placeholder='Conte como foi sua experiencia com o produto' required onChange={(e) => setAvaliationComment(e.target.value)}></textarea>
            </label>
          </div>


            <div className={styles.btnContainer}>
                <ButtonStep text='Voltar' direction='left' action={stepBack} />
                <ButtonStep tipo='submit' text='Avançar' direction='right'/>
            </div>

            </form>

    </div>
  )
}

export default Avaliation