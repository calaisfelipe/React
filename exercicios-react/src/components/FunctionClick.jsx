import React from 'react'

export default function FunctionClick() {


    function handleChange(){
        console.log('clicou!!')
    }

  return (
    <div>
        <button onClick={handleChange}>Click</button>
        </div>
  )
}
