import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Auth from './context/Auth'

//pages
import Home from './pages/Home'
import OrderSumary from './pages/OrderSumary'
import NoMatch from './pages/NoMatch'
import Products from './pages/Products'
import NewProducts from './pages/NewProducts'
import FeaturedProducts from './pages/FeaturedProducts'
import Users from './pages/Users'
import Admin from './pages/Admin'
import Profile from './pages/Profile'
import Login from './components/Login'

import RequireAuth from './components/RequireAuth'
import Navbar from './components/Navbar'
import UserDetails from './components/UserDetails'
import './App.css'




//import About from './pages/About'
const LazyAbout = React.lazy(() => import('./pages/About'))



function App() {


  return (
    <div className="App">
      <Auth >
      <Navbar title='Codevolution - React Router Course' />
      <Routes>

        <Route path='/' element={<Home />} />

        
        <Route path='about' element={<React.Suspense fallback='loading...'> <LazyAbout /> </React.Suspense> } />


        <Route path='order-sumary' element={<OrderSumary />}/>


        <Route path='users' element={<Users />}>
          <Route path=':id' element={<UserDetails />}/>
          <Route path='admin' element={<Admin />}/>  
        </Route>

        <Route path='products' element={<Products />}>
          <Route index element={<FeaturedProducts />} />
          <Route path='new' element={<NewProducts />} />
          <Route path='featured' element={<FeaturedProducts />} />
        </Route>

        <Route path='profile' element={<RequireAuth><Profile /> </RequireAuth>} />

        <Route path='login' element={<Login />} />
        <Route path='*' element={<NoMatch />} />

      </Routes>

      </Auth>
    </div>
  )
}

export default App
