import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Navbar from './components/Navbar'
import ButtonPage from './Pages/ButtonPage'
import InputsPage from './Pages/InputsPage'
import FormPage from './Pages/FormPage'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <BrowserRouter>
    <Navbar />
    <Routes>

    <Route path='/' element={<App />} />
    <Route path='buttons' element={<ButtonPage />} />
    <Route path='inputs' element={<InputsPage />} />
    <Route path='formulario' element={<FormPage />} />
    
    </Routes>

  


    </BrowserRouter>
  </React.StrictMode>,
)
