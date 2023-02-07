import styles from './Navbar.module.css'
import {Link} from 'react-router-dom'
import {BiMoviePlay, BiSearchAlt2} from 'react-icons/bi'

export default function Navbar() {
  return (
    <header>
        <Link to='/'><span id={styles.logo} ><BiMoviePlay/>MoviePlus+</span></Link>
        <nav>
 
          <form>

              <button className={styles.btnSearch} type='submit'><BiSearchAlt2/></button>

              <input type="text" name="movieSearch" id={styles.movieSearch} placeholder='Pesquise seu filme aqui..'/>

          </form>
        </nav>
      </header>
  )
}
