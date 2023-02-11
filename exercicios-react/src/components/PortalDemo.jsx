import React from 'react'
import ReactDOM from 'react-dom'

export default function PortalDemo() {

    const obj = {
        teste: 1
    }

    const obj2 = {
        teste: 2
    }

    const result = Object.is(obj.teste, obj2.teste)

    console.log(result)



  return ReactDOM.createPortal(
   <h1>PortalsDemo</h1>,
   document.getElementById('portal-root')
  )
}
