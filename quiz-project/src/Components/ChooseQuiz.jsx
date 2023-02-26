import React, {useContext} from 'react'
import { quizContext } from '../context/quiz'


import styles from './ChooseQuiz.module.css'
import category from '../img/category.svg'

function ChooseQuiz() {
  const [quizState, dispatch] = useContext(quizContext)

  return (
    <div id={styles.category}>
        <h2>Escolha uma categoria</h2>
        <p>As perguntas serão referentes a uma das linguagens abaixo:</p>
    
    <div id={styles.selectCategory}>
        <button onClick={() => dispatch({type:'CATEGORY_HTML'})}>HTML</button>
        <button onClick={() => dispatch({type:'CATEGORY_CSS'})}>CSS</button>
        <button onClick={() => dispatch({type:'CATEGORY_JAVASCRIPT'})}>Javascript</button>
    </div>

    <img src={category} alt="Escolha a categoria" />


    </div>
  )
}

export default ChooseQuiz