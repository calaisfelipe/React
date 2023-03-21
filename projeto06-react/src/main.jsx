import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import store from './app/store'
import { Provider } from 'react-redux'
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom'
import './index.css'
import RepositoryView from './Profile/RepositoryView'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>

    <Routes>
    <Route path='/' element={<App />} />
    
    
    <Route path='repos' element=''>
      <Route index element='' />
      <Route path=':login' element={<RepositoryView />} />


    </Route>
    
    <Route path='*' element={<Navigate to='/' replace />}/>
    </Routes>

    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
