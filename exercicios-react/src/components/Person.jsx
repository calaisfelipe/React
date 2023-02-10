import React from 'react'

export default function Person({data}) {
  return (
    <div>

    <p>{`Hello ${data.name}, you are ${data.age} years old and  ${data.skill} developer`}</p>
   
    </div>
  )
}
