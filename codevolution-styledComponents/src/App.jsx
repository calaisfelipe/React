import { ThemeProvider } from 'styled-components'
import './App.css'
import Logo from '../public/vite.svg'
import StyledButton, { LightButton } from './components/button/Button'
import { FancyButton, SubmitButton, DarkButton } from './components/button/Button'

import { ImageRotate } from './components/animations/Animation'


function App() {

  function test() {
    console.log('clicou')

  }

  const theme = {
    dark: {
      primary: '#000',
      text: '#fff'


    }, 
    light:{
      primary: '#fff',
      text: '#000'

    },

  }


  return (
    <div className="App">
     <ThemeProvider theme={theme}>

     <DarkButton>Dark</DarkButton>
     <LightButton>Light</LightButton>

      <ImageRotate src={Logo} alt='logo'></ImageRotate>

      <StyledButton onClick={test}>Hello</StyledButton>
      <div><br />
      </div>
      <StyledButton variant='outline'>Hello</StyledButton>
      <div><br />
      </div>
      <FancyButton>Fancy</FancyButton>
      <FancyButton variant='outline' >Fancy</FancyButton>
      <SubmitButton onClick={test}>Submit </SubmitButton>
      </ThemeProvider>
    </div>
  )
}

export default App
