import React from 'react'
import { StyledDivVertical } from './StyledDiv'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { restartSearch } from '../Profile/profileSlice'


function RepositoryNotFound() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    function returnHome(){
        dispatch(restartSearch())
        navigate('/')
    }

  return (
    <StyledDivVertical>

        <h2>Usuario não possui repositorios</h2>
        <button onClick={returnHome}>Retornar</button>
        
        
    </StyledDivVertical>
  )
}

export default RepositoryNotFound