import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ordered, restocked } from './cakeSlice'

function CakeView() {
  const dispatch = useDispatch()

 const numOfCakes = useSelector((state) => state.cake.numOfCakes)

const orderCake = () =>{
  dispatch(ordered())
}
const restockCake = () =>{
  dispatch(restocked(5))
}

 return (
    <div>
        <h2>number of cakes: {numOfCakes} </h2>
        <button onClick={orderCake}>Order cake</button>
        <button onClick={restockCake}>Restock cake</button>
    </div>
  )
}

export default CakeView