import React from 'react'
import {QueryClientProvider, QueryClient} from 'react-query'
import {ReactQueryDevtools} from 'react-query/devtools'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import HomePage from './Pages/HomePage'
import SuperHeroesPage from './Pages/SuperHeroesPage'
import RQSuperHeroesPage from './Pages/RQSuperHeroesPage'
import Navbar from './components/Navbar'
import HeroesDetailPage from './Pages/HeroesDetailPage'
import ParallelPage from './Pages/ParallelPage'
import DynamicParallelPage from './Pages/DynamicParallelPage'
import DependentQueriesPage from './Pages/DependentQueriesPage'
import PaginatedPages from './Pages/PaginatedPages'
import InfiniteQueriesPage from './Pages/InfiniteQueriesPage'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
    <Navbar />
    <Routes>
     <Route path='/' element={<App />} />
     <Route path='home' element={<HomePage />} />
     <Route path='superheroes' element={<SuperHeroesPage />} />
     <Route path='rqsuperheroes' element={<RQSuperHeroesPage />} />
     <Route path='parallel' element={<ParallelPage />} />

     <Route path='dependent' element={<DependentQueriesPage email='felipe_calais@hotmail.com' />} />

     <Route path='dinamicparallel' element={<DynamicParallelPage heroIds={[1, 3]}/>} >


     </Route>


     <Route path='/superherodetails/:id' element={<HeroesDetailPage />} />
     <Route path='/paginated' element={<PaginatedPages />} />
     <Route path='/infinity' element={<InfiniteQueriesPage/>} />
      
     

    

    </Routes>
    </BrowserRouter>
    <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
    </QueryClientProvider>
  </React.StrictMode>,
)
