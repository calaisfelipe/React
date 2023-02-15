import React from 'react'
import '../styles/components/info.sass'

function Info({icon,textLabel,text,color}) {
  return (

    <div className='InfoContainer'>

        <span style={{color: color}}>
            {icon}
        </span>

        <div>
            <p>{textLabel}</p>
            <h4>{text}</h4>
  
        </div>

    </div>
    

  )
}

export default Info