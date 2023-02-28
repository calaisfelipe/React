import React, {useState, useRef} from 'react'

function ObjectUseState() {

    const initState = {
        firstName: 'Bruce',
        lastName: 'Wayne'
    }

    const useInputRef = useRef()

    const [person, setPerson] = useState(initState)
    const [changeName, setChangeName] = useState('')


    function handleName(name){
        if(name === ''){return}
        setPerson({...person, firstName : name})
        useInputRef.current.value = ''
    }

    console.log('objectUseState Render')

  return (
    <div>
        <p>hello {person.firstName} {person.lastName}</p>

        <input type="text" name="firstName"  ref={useInputRef} placeholder='FirstName' onChange={(e) => setChangeName(e.target.value)}/>

        <button  onClick={() => handleName(changeName)}>Change First Name</button>



    </div>
  )
}

export default ObjectUseState