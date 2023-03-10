import React, {useReducer} from 'react'

import Identification from './components/Identification'
import Avaliation from './components/Avaliation'
import SendFeedBack from './components/SendFeedback'
import Complete from './components/Complete'

import './App.css'

export const feedbackContext = React.createContext()  

const stages = ['initial' , 'avaliation' , 'end', 'COMPLETE']

const initialValue = {
    nome: '',
    email: '',
    avaliation: '',
    comment:'',
    stage: stages[0],

}

function reducer(state, action) {

        switch(action.type){
          case 'NEXT':
            return { ...state,
              stage: stages[1],
              nome: action.user,
              email: action.userEmail


            }
            case 'BACK_BEGIN':
              return initialValue

            case 'BACK_AVALIATION':
              return {...state,
                stage: stages[1],
                avaliation: '',
                comment:''

              }  

            case 'NEXT_END':
              return{...state,
                stage: stages[2],
                comment: action.comment,
                avaliation: action.avaliation.value

              }

              case 'COMPLETE':
                return{
                  ...state,
                  stage: stages[3]
                }

            default:
                return state
        }
}


function App() {
  const [feedback, dispatch] = useReducer(reducer,initialValue)
 
  return (
    <feedbackContext.Provider value={{feedback: feedback, feedBackDispatch: dispatch}}>
    <div className="App">
      <h2>Deixe a sua avaliação</h2>
      <p>Ficamos felizes com a sua compra. Utilize o formulário abaixo para avaliar o produto.</p>
      <div className='formContainer'>
      
      {feedback.stage === 'initial' ? <Identification /> : ''}
      {feedback.stage === 'avaliation' ? <Avaliation /> : ''}
      {feedback.stage === 'end' ? <SendFeedBack /> : ''}
      {feedback.stage === 'COMPLETE' ? <Complete /> : ''}
 
      
  
      
      </div>

    </div>
    </feedbackContext.Provider>
  )
}

export default App
