import { useState } from 'react'
import React from 'react'

function CountStateTwo() {

const [name, setName] = useState({firstName: '', lastName: ''})

function handleNameChange(e){

    setName({...name, [e.target.name] : e.target.value} )
}

  return (
    <div>
        <p>Olá Sr {name.firstName} {name.lastName} </p>

        <input type="text" name="firstName" placeholder='Nome' onChange={handleNameChange} value={name.firstName}/>
        <input type="text" name="lastName" placeholder='SobreNome' onChange={handleNameChange}value={name.lastName}/>


    </div>
  )
}

export default CountStateTwo