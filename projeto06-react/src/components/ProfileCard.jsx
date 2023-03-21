import React from 'react'
import { BsGeoAltFill } from 'react-icons/bs'
import { StyledDivVertical } from './StyledDiv'
import styles from './ProfileCard.module.css'
import {Link} from 'react-router-dom'


function ProfileCard({ data }) {
    return (
        <div className={styles.cardContainer}>

            <img className={styles.profileImg} src={data.avatar_url} alt="avatar" />
            <h3>{data.login}</h3>
            <div className={styles.locationContainer}><span><BsGeoAltFill /></span><p>{data.location}</p></div>

            <div className={styles.followersContainer}>
                
                <StyledDivVertical >
                    <p>Seguidores: </p> 
                    <p className={styles.followerParagraf} >{data.followers}</p>
                </StyledDivVertical> 
            
            <hr />
            <StyledDivVertical >
                <p>Seguindo:</p>
                <p className={styles.followerParagraf}>{data.following}</p>
            </StyledDivVertical>
            
            
            </div>

            <Link to={`/repos/${data.login}`} className={styles.projectsLink}> Ver melhores Projetos </Link>


        </div>
    )
}

export default ProfileCard