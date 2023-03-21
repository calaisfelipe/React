import React from 'react'
import StyledDiv, { StyledDivVertical } from './StyledDiv'
import { GiCoffeeCup } from 'react-icons/gi'
import { BsShare, BsFillStarFill } from 'react-icons/bs'
import styles from './RepositoryCard.module.css'

function RepositoryCard({ data }) {

    return (

        <StyledDivVertical className={styles.containerCard}>
            <h3 style={{wordBreak: 'break-all'}}>{data.name}</h3>

            <StyledDiv >
                <span><GiCoffeeCup /></span>{data.language}
            </StyledDiv>


            <StyledDiv gap='1'>

                <StyledDiv>
                    <span style={{color: 'yellow'}}><BsFillStarFill /></span>
                    <p>{data.stargazers_count}</p>
                </StyledDiv>

                <StyledDiv>
                    <span style={{color: '#FFF'}}><BsShare /></span>
                    <p>{data.watchers_count}</p>
                </StyledDiv>



            </StyledDiv>

            <a href={data.html_url} target='_blank'>Ver Código </a>

        </StyledDivVertical>


    )
}

export default RepositoryCard