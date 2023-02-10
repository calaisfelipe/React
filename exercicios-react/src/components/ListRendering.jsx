import React from 'react'
import Person from './Person'

export default function ListRendering() {

    const arr2 = [
        {
            id:1,
            name: 'bruce',
            age : 30,
            skill : 'react'
        },

        {
            id:2,
            name: 'clark',
            age : 25,
            skill : 'Angular'

        },

        {
            id:3,
            name: 'Diana',
            age : 18,
            skill : 'Vue'

        }

    ]

  return (

    <div>

    {arr2.map((element) => <Person key={element.id} data={element}/>)}
    

    </div>
  )
}
