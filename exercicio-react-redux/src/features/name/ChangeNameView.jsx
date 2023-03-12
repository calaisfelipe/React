import React, {useState} from 'react'

import { changeName, clearName } from './NameSlicer'
import { useDispatch } from 'react-redux'
 

function ChangeNameView() {
    const [newName, setNewName] = useState('')
    const dispatch = useDispatch()

    function reset(){
        dispatch(clearName())
        setNewName('')
        
    }

  return (
    <div>
        <input type="text" name="changeNameInput" id="changeNameInput" onChange={(e) => setNewName(e.target.value)} value={newName}/>
        <button onClick={() => dispatch(changeName(newName)) }>Change</button>
        <button onClick={reset}>Reset</button>

        </div>
  )
}

export default ChangeNameView