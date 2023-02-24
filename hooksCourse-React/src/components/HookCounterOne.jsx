import React, {useState, useEffect} from 'react'

function HookCounterOne() {

const [count , setCount] = useState(0)
const [name, setName] = useState('')

useEffect(() =>{

    document.title = name


}, [name])

function handlerClick() {
setCount( count + 1)

}

function handleChange(e) {
  setName(e.target.value)
  
}


  return (
    <div>
        <p>UseEffect Exemplo</p>
        <button onClick={handlerClick}>Click {count} </button>
        <input type="text" name="name" id="name" onChange={handleChange} value={name}/>
    </div>
  )
}

export default HookCounterOne