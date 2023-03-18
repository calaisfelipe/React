import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectUserById } from './userSlices'
import { selectAllPosts } from '../posts/postsSlice'

import styles from './UserList.module.css'



function UserPost() {
    const { id } = useParams()
    const userId = Number(id)

    const posts = useSelector(selectAllPosts)
    const user = useSelector((state) => selectUserById(state, userId))

    const postsOfTheUser = posts.filter((post) => post.userId === userId)

    return (

        <div>
            <h2>Posts by {user.name}</h2>


            <ul className={styles.userPostList}>
                {!postsOfTheUser ? <h3>Post not Found!</h3> : postsOfTheUser.map((post) => <li key={post.id}><Link className={styles.userLink} to={`/post/${post.id}`}>{post.id}. Titulo: {post.title}</Link></li>)}
            </ul>

        </div>
    )
}

export default UserPost