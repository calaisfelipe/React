import React, {useContext} from 'react'
import { quizContext } from '../context/quiz'

import welldone from '../img/welldone.svg'
import styles from './GameOver.module.css'

function GameOver() {
    const [quizState, dispatch] = useContext(quizContext)

  return (
    <div id={styles.gameOver}>
        <h2>Fim de jogo !</h2>
        <p>Pontuação: {quizState.score} </p>
        <p>Você acertou {quizState.score} de {quizState.question.questions.length} perguntas</p>

        <img src={welldone} alt="Fim de jogo" />

        <button onClick={() => dispatch({type:'RESTART'})}>Reiniciar</button>

    </div>
  )
}

export default GameOver