import React, {useEffect, useState, useRef} from 'react'


function Timer() {

    const [time, setTime] = useState(0)
    const intervalRef = useRef()

    useEffect(() =>{

       intervalRef.current = setInterval(() => {
            setTime( prevTime => prevTime + 1)

        }, 1000)


        return () => {
            clearInterval(intervalRef.current)
            setTime(0)
        }

    }, [] )

  return (
    <div>
        <p>Timer: {time} </p>
        <button onClick={() => {
            clearInterval(intervalRef.current)
            setTime(0)
            
            } }>Clear Timer</button>



    </div>
  )
}

export default Timer