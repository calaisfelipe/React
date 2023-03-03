import React from 'react'
import { Link, Outlet, useSearchParams } from 'react-router-dom'
import ActiveUsers from './ActiveUsers'

function Users() {

    const [searchParams, setSearchParams] = useSearchParams()
    const showActiveUsers = searchParams.get('filter') === 'active'
  return (
    <div>
       <Link to='1'> <h2>User 1</h2> </Link>
       <Link to='2'> <h2>User 2</h2> </Link>
       <Link to='3'> <h2>User 3</h2> </Link>
       <Link to='admin'><h2>Admin</h2> </Link>
       <div>

        <Outlet />
        {showActiveUsers ? <ActiveUsers /> : ''}
       </div>

       <button onClick={() => setSearchParams({filter: 'active'})}>Active Users {searchParams}</button>

       <button onClick={() => setSearchParams({})} >Reset Filter</button>
    </div>
  )
}

export default Users