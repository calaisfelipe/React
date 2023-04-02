import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material'


import store from './app/store'
import { Provider } from 'react-redux'
import Navbar from './layout/Navbar'
import AddPostPage from './Pages/AddPostPage'
import SinglePostPage from './Pages/SinglePostPage'
import EditPostPage from './Pages/EditPostPage'

import { usersFetch } from './Components/users/usersSlice'
import { postsFetch } from './Components/posts/postSlice'



store.dispatch(postsFetch())
store.dispatch(usersFetch())




export const theme = createTheme({
  palette: {
    darker: {
      light: '#888',
      main: '#444',
      dark: '#222',
      contrastText: '#fff',

    }
  }
})


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>

      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Navbar />

          <Routes>

            <Route path='/' element={<App />} />
            <Route path='newpost' element={<AddPostPage />} />
            <Route path='*' element={<Navigate to='/' replace/>} />

            <Route path='post' >
              <Route path=':id' element={<SinglePostPage />} />
            </Route>

            <Route path='edit' >
              <Route path=':id' element={<EditPostPage />} />
            </Route>


          </Routes>
        </Provider>
      </ThemeProvider>

    </BrowserRouter>
  </React.StrictMode>,
)
