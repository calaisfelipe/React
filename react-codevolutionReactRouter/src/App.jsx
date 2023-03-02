import { Routes, Route } from 'react-router-dom'

//pages
import Home from './pages/Home'
import About from './pages/About'
import OrderSumary from './pages/OrderSumary'
import NoMatch from './pages/NoMatch'
import Products from './pages/Products'
import NewProducts from './pages/NewProducts'
import FeaturedProducts from './pages/FeaturedProducts'


import Navbar from './components/Navbar'
import './App.css'

function App() {


  return (
    <div className="App">
      <Navbar title='Codevolution - React Router Course' />
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='order-sumary' element={<OrderSumary />} />

        <Route path='products' element={<Products />}>
          <Route index element={<FeaturedProducts />} />
          <Route path='new' element={<NewProducts />} />
          <Route path='featured' element={<FeaturedProducts />} />

        </Route>

        <Route path='*' element={<NoMatch />} />

      </Routes>


    </div>
  )
}

export default App
