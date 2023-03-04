import {Routes, Route} from 'react-router-dom'

//pages
import Home from './pages/Home'
import Profile from './pages/Profile'
import NoMatch from './pages/NoMatch'
import Login from './pages/Login'

import Navbar from './components/Navbar'
import { AuthProvider } from './context/Auth'
import './App.css'


function App() {

  return (
    <AuthProvider>
    <div className="App">
      <Navbar />

      <Routes>

      <Route path='/' element={<Home />} />
      <Route path='profile' element={<Profile />} />
      <Route path='login' element={<Login />} />

      <Route path='*' element={<NoMatch />} />



      </Routes>
      
    </div>
    </AuthProvider>
  )
}

export default App
