import React from 'react'

import '../styles/components/title.sass'

function Title({text}) {
  return (
    <div id='titleContainer'>

        <div>
            <h2>{text}</h2>
        </div>
        <hr/>
       

    </div>
  )
}

export default Title