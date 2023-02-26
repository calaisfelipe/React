import React, {useReducer} from 'react'
import data from '../data/questions_complete'


const stages = ["start", "choose_category", "playing"  , "end"]

// data = [ {category: HTML , questions: [ { }, { }, { } ] } ]

const initalState = {
      gameStage: stages[0],
      Allquestions: data,
      question: [],
      currentQuestion: 0,
      score: 0,
      answerSelected: false
      
}

function quizReducer(state,action){
  console.log(state)
  
      switch(action.type){
        case 'REORDER_QUESTIONS':
            console.error('precisa reordenar')
          
          return state


        case 'CHANGE_STATE':
          return {...state,
            gameStage: stages[1]
            
          }
          case 'CATEGORY_HTML':
            return{...state, 
              gameStage: stages[2],
              question: data[0]
              
            
            }
            case 'CATEGORY_JAVASCRIPT':
            return{ ...state,
              gameStage: stages[2],
              question: data[1]
            
            }


            case 'CATEGORY_CSS':
            return{ ...state,
              gameStage: stages[2],
              question: data[2]
            }

            case 'CHANGE_QUESTION':
              const nextQuestion = state.currentQuestion + 1
              
              if (nextQuestion >= 3){
                state.gameStage = stages[3]
              }

              return {...state,
                currentQuestion: nextQuestion,
                answerSelected:false

              }
            
            case 'CHECK_ANSWER':
              if(state.answerSelected) return state

              console.log(action)
              const answer = action.payload.answer
              const option = action.payload.option

                let correctAnswer = 0

              if( answer === option){
              correctAnswer =  1
              }


              return {...state,
                  score: state.score + correctAnswer,
                  answerSelected: option
                


              }



            case 'RESTART':
              return initalState


          default:
            return state
      }


}

export const quizContext = React.createContext()

export const QuizProvider = ({children}) => {

  const value = useReducer(quizReducer, initalState)

  return <quizContext.Provider value={value}>{children}</quizContext.Provider>
}