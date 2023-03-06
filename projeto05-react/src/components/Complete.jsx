import React, { useContext } from 'react'
import { feedbackContext } from '../App'
import styles from './Complete.module.css'
import ButtonStep from './ButtonStep'

function Complete() {
    const feedback = useContext(feedbackContext)

    console.log(feedback)

    function returnInitial(){

        feedback.feedBackDispatch({type: 'BACK_BEGIN'})
    }


  return (
    <div className={styles.completeContainer}><p>
        Avaliação enviada com sucesso!<br/>
            Obrigado pelo feedback
    </p>
    <div className={styles.btnContainer}>
        <ButtonStep text='Voltar pro inicio' direction='left' action={returnInitial}/>
    </div>
    </div>
  )
}

export default Complete