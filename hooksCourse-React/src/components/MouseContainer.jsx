import React, {useState, useEffect} from 'react'
import HookCounterTwo from './HookCounterTwo'

function MouseContainer() {

    const [display, setDisplay] = useState(true)


function handleToggle(){

   setDisplay(!display)


}

  return (
    <div>
        <button onClick={handleToggle}>Hide/show</button>
        {display && <HookCounterTwo/>}


    </div>
  )
}

export default MouseContainer