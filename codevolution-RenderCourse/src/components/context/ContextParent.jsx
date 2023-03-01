import React, {useState} from 'react'




export const parentContext = React.createContext()


function ContextParent({children}) {

      const [count, setcount] = useState(0)


    console.log('ContextParent Render')
  return (
    <div>

        <button onClick={() => setcount(count + 1)}>Count: {count}</button>
        <parentContext.Provider value={count}>
        {children}
        </parentContext.Provider>



    </div>
  )
}

export default ContextParent