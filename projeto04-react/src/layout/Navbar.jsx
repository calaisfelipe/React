import { useState } from 'react'
import styles from './Navbar.module.css'
import {Link, useNavigate} from 'react-router-dom'
import {BiMoviePlay, BiSearchAlt2} from 'react-icons/bi'

export default function Navbar() {


const [search , setSearch] = useState('')
const navigate = useNavigate()


function searchMovie(e) {
  e.preventDefault()

  if(!search) return

  navigate(`/search?q=${search}`)
  setSearch('')
  console.log(search)
  
}

  return (
    <header>
        <Link to='/'><span id={styles.logo} ><BiMoviePlay/>MoviePlus+</span></Link>
        <nav>
 
          <form onSubmit={searchMovie}>

              <button className={styles.btnSearch} type='submit'><BiSearchAlt2/></button>

              <input type="text" name="movieSearch" id={styles.movieSearch} placeholder='Pesquise seu filme aqui..' onChange={(e) => setSearch(e.target.value)} value={search}/>

          </form>
        </nav>
      </header>
  )
}
