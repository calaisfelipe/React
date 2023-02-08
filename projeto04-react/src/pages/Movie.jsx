import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import {BsStarFill} from 'react-icons/bs'
import Loading from "../layout/Loading"
import styles from './Movie.module.css'


export default function Movie() {

  const moviesURL = 'https://api.themoviedb.org/3/movie'
  const apiKey = 'api_key=c26469130456e5abb4bcc40972bc00df'
  const posterUrl = 'https://image.tmdb.org/t/p/w500/'

  const [movie, setMovie] = useState([])
  const [generos, setGeneros] = useState('')
  const [loading , setLoading] = useState(true)

  const {id} = useParams()
  console.log(id)

  useEffect(() => {

    setLoading(true)

    fetch(`${moviesURL}/${id}?${apiKey}` , {
      method: 'GET',
      headers: { 'Content-Type':'application/json'},
    })
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data)
      setMovie(data)
      
      const allGenre = []
      data.genres.map((genre) => allGenre.push(genre.name))
      setGeneros(allGenre.join(', '))

     setLoading(false)


    })
    .catch((err) => console.log(err))

  }, [id])
  
    const popularity = Number(movie.vote_average)
    popularity.toFixed(1)





  return (

    <>
   

    {loading && <Loading /> }
    {movie && !loading ? ( <div className={styles.container}>
      <div className={styles.cardMovie}>
        
        <div className={styles.imgContainer}>
          <img className={styles.imgMovie} src={`${posterUrl}${movie.poster_path}`} alt={movie.original_title} />
          </div>

        <div className={styles.infoContainer}>
          <div className={styles.titleContainer}>
            <h3 className={styles.movieTitle}>{movie.original_title}</h3>
             <span><BsStarFill/> {popularity.toFixed(1)}</span>
          </div>
          <p>Genêros: {generos}</p>
          <p>Sinopse: {movie.overview}</p>
          <p>Duração  : {movie.runtime} min</p>
          <p className={styles.tagline}>{movie.tagline}</p>
        </div>

      </div>
    </div>   ) : ('')}
    
    </>
  )
}
