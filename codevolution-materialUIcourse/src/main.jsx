import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Navbar from './components/Navbar'
import ButtonPage from './Pages/ButtonPage'
import InputsPage from './Pages/InputsPage'
import FormPage from './Pages/FormPage'
import ContainersPage from './Pages/ContainersPage'
import ComplexComponentsPage from './Pages/ComplexComponentsPage'
import NavigationPage from './Pages/NavigationPage'
import DataDisplayPage from './Pages/DataDisplayPage'
import TablePage from './Pages/TablePage'
import FeedbackPage from './Pages/FeedbackPage'
import LabsPage from './Pages/LabsPage'
import ResponsivePage from './Pages/ResponsivePage'
import CostumazationPage from './Pages/CostumazationPage'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <BrowserRouter>
    
    <Navbar />
    <Routes>

    <Route path='/' element={<App />} />
    <Route path='buttons' element={<ButtonPage />} />
    <Route path='inputs' element={<InputsPage />} />
    <Route path='formulario' element={<FormPage />} />
    <Route path='containers' element={<ContainersPage />} />
    <Route path='complexcomponents' element={<ComplexComponentsPage />} />
    <Route path='navigation' element={<NavigationPage />} />
    <Route path='datadisplay' element={<DataDisplayPage />} />
    <Route path='tables' element={<TablePage />} />
    <Route path='feedback' element={<FeedbackPage />} />
    <Route path='labs' element={<LabsPage />} />
    <Route path='responsive' element={<ResponsivePage />} />
    <Route path='costumazation' element={<CostumazationPage />} />
   


    </Routes>


    
    </BrowserRouter>
  </React.StrictMode>,
)
