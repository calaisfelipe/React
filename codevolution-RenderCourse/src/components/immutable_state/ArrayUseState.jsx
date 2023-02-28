import React, {useState} from 'react'

const initState = ['Bruce' , 'Wayne']


function ArrayUseState() {

    const [persons, setPersons] = useState(initState)


    function handleClick(){

    
        const newPersons = [...persons]

        if(newPersons.find((person) => person === 'clark' || person === 'Kent' )){return}

        newPersons.push('clark')
        newPersons.push('Kent')

        setPersons(newPersons)

    }



    console.log('Array UseState Render')
  return (
    <div>
        <button onClick={handleClick}>Click</button>

        {
            persons.map((person) => (
                <p key={person}>{person}</p>
            ))
        }

    </div>
  )
}

export default ArrayUseState