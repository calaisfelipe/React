import { useState } from 'react'
import './App.css'
import Modal from './Components/layout/Modal'
import Fade from './Components/layout/Fade'

function App() {

  const [showModal, setShowModal] = useState(false)
  const [showFade , setShowFade] = useState('fadeoff')
  

  function event(){

    setShowModal(false)
    setShowFade('fadeoff')
    return console.log('clicou')
  }

  function clicar(){

    setShowModal(true)
    setShowFade('fade')

  }

  const btn_style = {
    color: '#fff',
    backgroundColor: '#007bff',
    borderRadius: '20px',
    padding: '.8em 1em',
    cursor: 'pointer',
    border: 'none'

  }


  return (
    <div className="App">
      

    {showModal ? (<div>
      <Modal event={event} btnText='Sair'/>
      <Fade className={` ${showFade}`}/>
    </div>) : (<div></div>) }
    

    <button  style={btn_style} onClick={clicar}>Clique aqui</button>

    </div>
  )
}

export default App
