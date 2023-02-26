import React, {useContext} from 'react'
import { quizContext } from '../context/quiz'

import styles from './Question.module.css'
import Option from './Option'

function Question() {

    const [quizState, dispatch] = useContext(quizContext)

    const currentQuestion = quizState.question.questions[quizState.currentQuestion].question


    function selectOption(option){

    
       dispatch({
        type: 'CHECK_ANSWER', 
        payload: {answer:quizState.question.questions[quizState.currentQuestion].answer, option}
     })
       

      
    }


  return (
    <div id={styles.question_Container}>
        <p className={styles.pOption}>Pergunta {quizState.currentQuestion + 1} de {quizState.question.questions.length}</p>


        <h2>{ currentQuestion }</h2>

        <div id={styles.options_container}>
                
   
                {
                quizState.question.questions[quizState.currentQuestion].options.map((option) => <div className={styles.optionContainer}>

                <Option option={option} key={option} answer={quizState.question.questions[quizState.currentQuestion].answer} onSelectOption={selectOption}/>



                </div>) }
                
                

        </div>

        {quizState.answerSelected && (<button className={styles.btnConfirm} onClick={() => dispatch({type:'CHANGE_QUESTION'})}>Continuar</button>)}
    </div>
  )
}

export default Question