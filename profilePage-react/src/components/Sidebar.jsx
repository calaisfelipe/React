import React from 'react'

import '../styles/components/sidebar.sass'
import FelipeCalais from '../img/felipe_calais.jpg'
import SocialMediaLink from '../layout/SocialMediaLink'

import { BsInstagram, BsLinkedin ,BsGithub , BsFillTelephoneFill, BsGeoAltFill } from 'react-icons/bs'
import {FiMail } from 'react-icons/fi'

import DownloadBtn from '../layout/DownloadBtn'
import Info from './Info'


const sidebar = () => {

  const socialMedia = [

    {
      name: 'Instagram',
      url: 'https://www.instagram.com/calaisfelipe/',
      logo: '<BsInstagram/>',
      color: ''
    },

    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/felipe-calais/',
      logo: 'BsLinkedin',
      color: '#0A66C2'
    },

    {
      name: 'GitHub',
      url: 'https://github.com/calaisfelipe',
      logo: 'BsGithub',
      color: '#fff'
    },

  ]

  return (
    <div id='sidebarContainer'>

      <div>
        <img src={FelipeCalais} alt="Felipe Calais Perfil" />
      </div>

      <div id='infoJobContainer'>
        Desenvolvedor
      </div>

      <div id='socialMediaContainer'>

      <SocialMediaLink logo={<BsInstagram/>} url='https://www.instagram.com/calaisfelipe/' color='' name='INSTAGRAM'/>

      <SocialMediaLink logo={<BsLinkedin/>} url='https://www.linkedin.com/in/felipe-calais/' color='' name='LinkedIn'/>

      <SocialMediaLink logo={<BsGithub/>} url='https://github.com/calaisfelipe' color='#fff' name='GitHub'/>

        {/* socialMedia.length > 0 && socialMedia.map((media) => <SocialMediaLink logo={media.logo} url={media.url} color={media.color} name={media.name}/>)*/}
        

      </div>

      <div id='infoContainer'>
         <Info textLabel='Telefone' text='(31)99519-6573' icon={<BsFillTelephoneFill />} color='rgba(221,36,118,1)' />
         <Info textLabel='E-mail' text='felipe_calais@hotmail.com' icon={<FiMail />} color='rgba(221,36,118,1)' />
         <Info textLabel='Localização' text='Belo Horizonte /MG' icon={<BsGeoAltFill />} color='rgba(221,36,118,1)' />
      </div>

      <DownloadBtn text='Download Curriculo' />

    </div>
  )
}

export default sidebar