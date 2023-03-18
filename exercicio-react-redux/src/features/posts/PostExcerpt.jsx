import React from 'react'

import {useSelector} from 'react-redux'
import TimeAgo from '../date/TimeAgo'
import Reactions from '../reactions/Reactions'
import { selectAllUsers } from '../users/userSlices'
import {Link} from 'react-router-dom'

import styles from './PostExcerpt.module.css'



function PostExcerpt({post}) {
    const users = useSelector(selectAllUsers)

    return (
        <article className={styles.postContainer} >
            <h3>{post.title}</h3>
            <p>{post.body.substring(0, 100)}</p>
        
            <small>by {users.map((user) => user.id == post.userId ? user.name : '')} </small>

            <TimeAgo time={post.date} />

            <div className={styles.reactionContainer}>
                <Reactions reactionType='heart' count={post.reactions.heart} postId={post.id} />
                <Reactions reactionType='wow' count={post.reactions.wow} postId={post.id}  />
                <Reactions reactionType='coffee' count={post.reactions.coffee} postId={post.id} />
                <Reactions reactionType='rocket' count={post.reactions.rocket} postId={post.id} />
                <Reactions reactionType='thumbsUp' count={post.reactions.thumbsUp} postId={post.id} />
                <div><Link className={styles.editLink} to={`/post/${post.id}`}>See Post</Link></div>
            </div>
        </article>
    )
}

export default React.memo(PostExcerpt)