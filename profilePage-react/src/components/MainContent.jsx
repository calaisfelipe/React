import React from 'react'
import TecnologieCard from '../layout/TecnologieCard'
import Title from '../layout/Title'
import DownloadBtn from '../layout/DownloadBtn'

import '../styles/components/MainContent.sass'

const MainContent = () => {

  const tecnologies = [
    {
      tittle: 'HTML5',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      logo: 'https://cdn-icons-png.flaticon.com/512/5968/5968267.png'
    },

    {
      tittle: 'CSS',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      logo: 'https://cdn-icons-png.flaticon.com/512/5968/5968242.png'
    },

    {
      tittle: 'JavaScript',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      logo: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png'
    },

    {
      tittle: 'React',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      logo: 'https://cdn-icons-png.flaticon.com/512/1126/1126012.png'
    },

    {
      tittle: 'Bootstrap',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      logo: 'https://cdn-icons-png.flaticon.com/512/5968/5968672.png'
    },

    {
      tittle: 'Sass',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      logo: 'https://cdn-icons-png.flaticon.com/512/5968/5968358.png'
    }

  ]

  return (
    <div id='mainContentContainer'>
    <Title text='Sobre '/>
    <div className='perfilDescriptionContainer'>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate sequi ratione, fugiat itaque amet quo eveniet perspiciatis vel eum corporis aliquam nihil, sed quos aut exercitationem in sunt veniam enim.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet, harum, explicabo officia laudantium, ea facere commodi deleniti incidunt dicta earum ipsam voluptatem quae. Iure voluptatem impedit veritatis nihil aperiam dignissimos!</p>
    </div>
    <Title text='Tecnologias' />
    <div className='TecnologiasContainer'>

    {tecnologies.length > 0 && (tecnologies.map((tecnologie) => <TecnologieCard key={tecnologies.indexOf(tecnologie)} text={tecnologie.text} tittle={tecnologie.tittle} logo={tecnologie.logo}/>))}

    </div>

    <Title text='Projetos' />
    <div className='perfilDescriptionContainer'>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem aliquam nisi quo nemo quis quibusdam quia dolor harum qui, dolorem ex repellat consequatur illum nihil dolorum aperiam? A, quo ab.</p>
    </div>

    <DownloadBtn text='Ver Projetos' url='#'/>
    
    </div>
  )
}

export default MainContent