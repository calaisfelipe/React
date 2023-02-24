import React, { useState, useEffect} from 'react'


function HookCounterTwo() {

    const [x , setX] = useState(0)
    const [y , setY] = useState(0)


function logMousePosition(e){

    setX(e.clientX)
    setY(e.clientY)

} 

    useEffect(() => {

      console.log('useEffect Call')   
      window.addEventListener('mousemove', logMousePosition)   



    }, [])


  return (
    <div>
        Hooks X - {x} Y - {y}


    </div>
  )
}

export default HookCounterTwo