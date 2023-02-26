import React, {useContext} from 'react'
import { quizContext } from '../context/quiz'

import styles from './Option.module.css'



function Option({option , answer, onSelectOption}) 
{

    const [quizState, dispatch] = useContext(quizContext)


  return (
    <div className={`${styles.optionContainer} ${quizState.answerSelected && option === answer ? styles.correct : '' }
    ${quizState.answerSelected && option !== answer ? styles.wrong : '' }`} 
    
    
    onClick={() => onSelectOption(option)}>

        <p className={styles.optionStyle}>{option}</p>

    </div>
  )
}

export default Option