import React, {useEffect} from 'react'
import ReactDOM from 'react-dom/client'
import { Provider} from 'react-redux'
import App from './App'

import store from './app/store'
import { fetchUsers } from './features/users/userSlices'

import './index.css'


store.dispatch(fetchUsers())

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
)