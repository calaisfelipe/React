import React, {useEffect} from 'react'
import { BrowserRouter} from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import { Provider} from 'react-redux'
import App from './App'


import store from './app/store'
import { fetchUsers } from './features/users/userSlices'
import { gettingPosts } from './features/posts/postsSlice'

import './index.css'

store.dispatch(gettingPosts())
store.dispatch(fetchUsers())

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter >
    <Provider store={store}>
    <App />
    </Provider>
    </BrowserRouter >
  </React.StrictMode>,
)
