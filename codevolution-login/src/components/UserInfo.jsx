import React from 'react'

function UserInfo({name , logout}) {
  return (
    <>
    <div>Welcome {name} </div>
    <button onClick={logout}>LogOut</button>
    </>
  )
}

export default UserInfo