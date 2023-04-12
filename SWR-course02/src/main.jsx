import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { SWRConfig } from 'swr'
import UserDetailsPage from './pages/UserDetailsPage'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <SWRConfig value={{ provider: () => new Map() }}>


        <Routes>
          <Route path='/' element={<App />} />
          
          <Route path='/users'>
            <Route path='/users/:id' element={<UserDetailsPage />}/>
            
    

          </Route>
          

        </Routes>



      </SWRConfig>
    </BrowserRouter>
  </React.StrictMode>,
)
