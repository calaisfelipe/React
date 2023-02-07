import { useState, useEffect} from 'react'
import styles from './Home.module.css'
import CardMovie from '../layout/CardMovie'


const moviesURL = 'https://api.themoviedb.org/3/movie'
const apiKey = 'api_key=c26469130456e5abb4bcc40972bc00df'


export default function Home() {

  const [topMovies, setTopMovies] = useState([])



  const getTopRatedMovies = async (url) => {

  await fetch(`${url}/top_rated?${apiKey}`,{
      method: 'GET',
      headers: { 'Content-Type':'application/json'}
    }
    
    ).then((resp) =>  resp.json())
    .then((data) => setTopMovies(data.results)

  )
    .catch((err) => console.log(err))

  }
  

  
  useEffect(() => {
  
   getTopRatedMovies(moviesURL)
   console.log(topMovies)
   


  }, [])
  

  return (
    
    <div className={styles.container}>
        <h2>Melhores filmes:</h2>

    <div className={styles.containerCardsMovies}>
    {topMovies.length > 0 && (topMovies.map((movie) => <p>{movie.title}</p>))}

    </div>
      



    </div>
  )
}
