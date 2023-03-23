import './App.css'
import MuiTypografy from './components/MuiTypografy'
import MuiButton from './components/MuiButton'
import MuiButtonGroup from './components/MuiButtonGroup'
import MuiToggleButton from './components/MuiToggleButton'
import MuiTextField from './components/MuiTextField'


function App() {
  
  function message(){
    console.log('CLICOU')
  }

  return (
    <div className="App">
      <MuiTypografy >
        Exemplo tipografia
      </MuiTypografy >
      <MuiButton action={message}></MuiButton >
      <hr />
      <MuiButtonGroup />
      <hr />
      <MuiToggleButton />
      <hr />
      <MuiTextField />

    </div>
  )
}

export default App
