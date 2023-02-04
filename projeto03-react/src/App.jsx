//mport { useState } from 'react'
import './App.css'
import MainTitle from './layout/MainTitle'
import Form from './components/Form'


function App() {

  return (
    <div className="App">
      <main>
        <MainTitle text='React Todo' />
        <hr></hr>
        <Form />
        <hr></hr>



      </main>


    </div>
  )
}

export default App
