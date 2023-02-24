import React from 'react'
import useInput from '../Hooks/useInput'

function FormOne() {
    const [firstName, bindFirstName, resetFirstName] = useInput('')
    const [lastName, bindLastName, resetLastName] = useInput('')
    
function submitHandler(e){
    e.preventDefault()
    alert(`Olá sr ${firstName} ${lastName}`)
    resetFirstName()
    resetLastName()

}

  return (
    <div>
        <form onSubmit={submitHandler}>
            <label htmlFor="FirstName">FirstName:</label>
            <input type="text" name="FirstName" 

            id="FirstName"  {...bindFirstName} />

            <label htmlFor="LastName">LastName:</label>
            <input type="text" name="LastName" id="LastName" {...bindLastName}/>

        <button>Submit</button>
        </form>
        

    </div>

  )
}

export default FormOne