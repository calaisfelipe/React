import React from 'react'
import { useParams } from 'react-router-dom'

function UserDetails() {

  const params = useParams()
  const id = params.id

  return (
    <div>Detail About User {id}</div>
  )
}

export default UserDetails