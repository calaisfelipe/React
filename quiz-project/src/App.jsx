import { useContext } from 'react'
import { quizContext } from './context/quiz'

import Welcome from './Components/Welcome'
import ChooseQuiz from './Components/ChooseQuiz'
import Question from './Components/Question'

import './App.css'
import { useEffect } from 'react'
import GameOver from './Components/GameOver'



function App() {
  const [quizState, dispatch] = useContext(quizContext)


  useEffect(() => {
    //Embaralhar as perguntas
    dispatch({type: 'REORDER_QUESTIONS'})

  }, [])


  return (
    <div className="App">
      
      <h1>Quiz de programação</h1>
      
      {quizState.gameStage === 'start' && <Welcome />}
      {quizState.gameStage === 'choose_category' && <ChooseQuiz />}
      {quizState.gameStage === 'playing' && <Question />}
      {quizState.gameStage === 'end' && <GameOver /> }
      


    </div>
  )
}

export default App
