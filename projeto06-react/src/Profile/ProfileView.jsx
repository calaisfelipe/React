import React from 'react'
import { useSelector } from 'react-redux'
import { allProfiles } from '../Profile/profileSlice'
import ProfileCard from '../components/ProfileCard'
import StyledDiv from '../components/StyledDiv'

function ProfileView() {
    const profiles = useSelector(allProfiles)
    


  return (
    <StyledDiv>

      {!profiles && <h2>Loading...</h2>}
      {profiles && profiles.map((profile) => (!profile.login ? <h2 style={{marginTop: '3em'}}>Usuario não encontrado!</h2> : <ProfileCard key={profile.id} data={profile} />))}
      


    </StyledDiv>
    
   
  )
}

export default ProfileView