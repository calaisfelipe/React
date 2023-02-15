import Sidebar from './components/Sidebar'
import MainContent from './components/MainContent'

import './styles/components/app.sass'


function App() {
 

  return (
    <div id='portfolio'>
      <h1>Felipe Calais</h1>
      <main>
        <Sidebar />
        <MainContent />
      </main>
    </div>
  )
}

export default App
