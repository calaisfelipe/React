import React from 'react'
import {useQuery} from 'react-query'
import axios from 'axios'

const fetchSuperHeroes = () =>{
    return axios.get('http://localhost:5000/superheroes')
    
}
const fetchFriends = () =>{
        return axios.get('http://localhost:5000/friends')
    
}

function ParallelPage() {

  const {data: heroes} = useQuery('superhero',fetchSuperHeroes) 
  const {data: friends} = useQuery('friends',fetchFriends) 


  return (
    <div>
        <h5>Heroes</h5>
        {heroes && heroes?.data.map((hero) => <p key={hero.id}>{hero.name}</p>)}
        <h5>Friends:</h5>
        {friends && friends?.data.map((hero) => <p key={hero.id}>{hero.name}</p>)}


    </div>
  )
}

export default ParallelPage