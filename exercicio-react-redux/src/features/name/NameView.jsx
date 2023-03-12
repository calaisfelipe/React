import React from 'react'

import {useSelector} from 'react-redux'


function NameView() {

    const name = useSelector((state) => state.Name.name)


  return (
    <div>Olá Senhor {name} </div>
  )
}

export default NameView