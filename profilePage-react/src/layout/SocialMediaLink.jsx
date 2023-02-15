import React from 'react'
import '../styles/components/SocialMediaLink.sass'
import { BsInstagram, BsLinkedin ,BsGithub } from 'react-icons/bs'



function SocialMediaLink({logo,color,url,name}) {
  return (
    <>

        <a id={name} href={url} style={{color: color}}> {logo} </a>
    
    </>
  )
}

export default SocialMediaLink