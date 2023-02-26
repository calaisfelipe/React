import React, {useContext} from 'react'
import {quizContext} from '../context/quiz'

import Quiz from '../img/quiz.svg'
import styles from './Welcome.module.css'

function Welcome() {

const [quizState, dispatch] = useContext(quizContext)


  return (
    <div id={styles.welcome} >
        <h2>Seja bem-vindo</h2>
        <p>Clique no botão para começar:</p>
        <div>
          <button onClick={() =>  dispatch({type:'CHANGE_STATE'})}>Iniciar</button>
          </div>
        <img src={Quiz} alt="Tela incial Quiz" />


    </div>
  )
}

export default Welcome