import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, Link } from 'react-router-dom'
import { repositoryFetch } from './profileSlice'
import { allRepository, allProfiles } from './profileSlice'
import RepositoryCard from '../components/RepositoryCard'
import GlobalTheme from '../Themes/GlobalTheme'
import StyledDiv, {StyledDivVertical} from '../components/StyledDiv'
import ProfileVerticalCard from './ButtonReturn'
import RepositoryNotFound from '../components/RepositoryNotFound'
import ButtonReturn from './ButtonReturn'


function RepositoryView() {
    const {login} = useParams()
    const dispatch = useDispatch()
    const repositorys = useSelector(allRepository)
    const profiles = useSelector(allProfiles)
    const repository = repositorys[0]
    console.log(repository)
    useEffect(() =>{

        dispatch(repositoryFetch(login))
        
    }, [])

   

  return (
    <StyledDivVertical gap='1' style={{padding: '1em', position: 'relative'}}>
        <GlobalTheme />
 
            
            <h3 style={{fontSize: '1.5em'}}>Explore os repositórios do usuario: {login}</h3>
      
        <StyledDiv>

        {!repository && <h2>Loading...</h2>}

        <StyledDiv gap='1' style={{flexWrap: 'wrap'}}>
        {repository && repository.length == 0 ? <RepositoryNotFound /> : <ButtonReturn />}  
        {repository ? repository.map((resp) => <RepositoryCard key={resp.id} data={resp} /> ) : null}
        </StyledDiv>
        

        </StyledDiv>

        
    </StyledDivVertical>
  )
}

export default RepositoryView