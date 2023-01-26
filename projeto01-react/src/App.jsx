//import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//Pages
import Contact from './components/pages/Contact'
import Home from './components/pages/Home'
import NewProject from './components/pages/NewProject'
import Company from './components/pages/Company'

//layout
import Navbar from './components/layout/Navbar'
import Container from './components/layout/container'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <Router>
      <Navbar />
      <Container customClass='min_height'>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/company" element={<Company />} />
          <Route path="/newproject" element={<NewProject />} />
      </Routes>
      </Container>
      <p>Footer</p>

    </Router>
  )
}

export default App
