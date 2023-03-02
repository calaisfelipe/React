import React from 'react'
import { useNavigate } from 'react-router-dom'

function OrderSumary() {

  const navigate = useNavigate()

  return (
    <>
    <div>Order Confirmed!!</div>
    <button onClick={() => navigate(-1) }>Return Home</button>
    </>
  )
}

export default OrderSumary