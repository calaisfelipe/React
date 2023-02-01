//import NewYear from './img/NewYear.jpg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//Pages
import Home from './pages/Home'



function App() {
      
  //<div className="App" style={{backgroundImage: `url(${NewYear})` }}></div>

  return (
    
    <Router>
      <Routes>
      <Route path='/' element={<Home />} />
      </Routes>
    

    </Router>
      
      
    
  )
}

export default App
