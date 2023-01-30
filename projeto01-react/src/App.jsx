import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//Pages
import Contact from './components/pages/Contact'
import Home from './components/pages/Home'
import NewProject from './components/pages/NewProject'
import Company from './components/pages/Company'
import Projects from './components/pages/Projects'
import Project from './components/pages/project'

//layout
import Navbar from './components/layout/Navbar'
import Container from './components/layout/container'
import Footer from './components/layout/Footer'

function App() {
  

  return (
    <Router>
      <Navbar />
      <Container customClass='min_height'>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/company" element={<Company />} />
          <Route path="/newproject" element={<NewProject />} />
          <Route path="/project/:id" element={<Project />} />
      </Routes>
      </Container>
      <Footer />

    </Router>
  )
}

export default App
