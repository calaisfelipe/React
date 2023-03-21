import React from 'react'
import { useNavigate } from 'react-router-dom'
import { restartSearch } from './profileSlice'
import { useDispatch } from 'react-redux'
import styles from './ButtonReturn.module.css'


function ButtonReturn() {
const navigate = useNavigate()
const dispatch = useDispatch()

    function returnHome(){
        dispatch(restartSearch())
        navigate('/')
    }


    return (
        <div className={styles.btnReturn}>
           <button onClick={returnHome}>Retornar</button>

        </div>
    )
}

export default ButtonReturn