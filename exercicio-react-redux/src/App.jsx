
import './App.css'

import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import AddPostForm from './features/addPosts/AddPostForm'
import SinglePostPage from './features/pages/SinglePostPage'
import PostList from './features/posts/PostList'
import PageNotFound from './features/pages/PageNotFound'
import About from './features/pages/About'
import EditPostForm from './features/posts/EditPostForm'


function App() {


  return (
    <div className="App">
      <Navbar />
      <Routes>

        <Route path='/' element={<PostList />} />
        <Route path='newpost' element={<AddPostForm />} />

        <Route path='post' element={''}>
          <Route index element={<PostList />} />
          <Route path=':id' element={<SinglePostPage />} />

          <Route path='edit' element={''}>
            <Route path=':id' element={<EditPostForm />} />


          </Route>


        </Route>




        <Route path='about' element={<About />} />
        <Route path='*' element={<PageNotFound />} />



      </Routes>

    </div>

  )
}

export default App
