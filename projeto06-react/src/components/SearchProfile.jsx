import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { profileFetch } from '../Profile/profileSlice'
import styles from './SearchProfile.module.css'

function SearchProfile() {
    const [searchProfile, setSearchProfile] = useState('')
    const dispatch = useDispatch()

    function getProfile(profile){

        if(!profile){return}

        dispatch(profileFetch(profile))

        setSearchProfile('')


    }

  return (
    <div className={styles.container}>
        <h2>GitHub Finder</h2> 

    <div className={styles.inputContainer}>
        <input type="text" onChange={(e) => setSearchProfile(e.target.value) } value={searchProfile} /> 
        <button onClick={() => getProfile(searchProfile)}>Search</button>   
    </div>

    </div>
  )
}

export default SearchProfile