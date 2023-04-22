import './App.css'
import Application from './application/Application'
import Counter from './components/counter/Counter'
import { Skills } from './skills/Skills'
import { ProviderTheme } from './providers/AppProviders'
import MuiMode from './Mui/MuiMode'

function App() {


  return (
    <ProviderTheme>
      <div className='App'>
          <MuiMode />
      </div>
    </ProviderTheme>
  )
}

export default App
