import React from 'react'

import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import { selectAllUsers } from './userSlices'

import styles from './UserList.module.css'


function UserList() {
    const users = useSelector(selectAllUsers)


  return (
    <div className={styles.containerAll}>
        <h2>UserList</h2>

        <div>
            <ul className={styles.containerList}>{users.map((user) => <li key={user.id}>
                <Link className={styles.userLink} to={`/user/${user.id}`}>{user.name}</Link></li>)
            
                }</ul>
        </div>
    </div>
  )
}

export default UserList