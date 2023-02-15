import React from 'react'

import '../styles/components/TecnologieCard.sass'

function TecnologieCard({tittle,text,logo}) {
  return (
    <div className='cardContainer'>

        <div className='logoContainer'>
            <img src={logo} alt={tittle} />
            </div>

        <div>
            <h4>{tittle}</h4>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default TecnologieCard