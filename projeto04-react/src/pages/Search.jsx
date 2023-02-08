import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import styles from './Home.module.css'
import CardMovie from '../layout/CardMovie'


export default function Search() {

  const moviesURL = 'https://api.themoviedb.org/3/search/movie'
  const apiKey = 'api_key=c26469130456e5abb4bcc40972bc00df'

  const [searchParams, setSearchParams] = useSearchParams()
  const [movies, setMovies] = useState([])
 

  useEffect(() =>{
    
    fetch(`${moviesURL}?${apiKey}&query=${searchParams}`, {
      method: 'GET',
      headers: {'Content-Type' : 'application/json'},

    }).then((resp) => resp.json())
    .then((data) => {
      console.warn(data)
      setMovies(data.results)
    })
    .catch((err) => console.log(err))


  },[searchParams])


  
  return (

    <div className={styles.container}>
      <h3>Resultados para: <span className={styles.searchResult}> {searchParams}</span></h3>
    <div className={styles.containerCardsMovies}>

    {movies.length > 0 && 
    (movies.map((movie) => <CardMovie title={movie.title} poster={movie.poster_path} stars={movie.vote_average} key={movie.id} id={movie.id}/>)
    
    )}

    </div>
      



    </div>
  )
}
