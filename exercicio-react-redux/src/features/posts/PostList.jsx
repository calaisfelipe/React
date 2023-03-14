import React from 'react'
import {useSelector} from 'react-redux'
import { selectAllPosts } from './postsSlice'
import { selectAllUsers } from '../users/userSlices'

import TimeAgo from '../date/TimeAgo'
import Reactions from '../reactions/Reactions'
import styles from './PostList.module.css'



function PostList() {
    
    const posts  = useSelector(selectAllPosts)
    const users = useSelector(selectAllUsers)

    const orderedPosts = posts.slice().sort((a,b) => b.date.localeCompare(a.date))

  return (
    <div className={styles.containerAll}>
        
        <h2>PostList:</h2>

        {
            orderedPosts.map((post) => 
                <article className={styles.postContainer} key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.content.substring(0, 100)}</p>
                <small>by {users.map((user) => user.id == post.userId ? user.name : '')} </small>
                <TimeAgo time={post.date} />
                <div className={styles.reactionContainer}>
                  <Reactions reactionType='heart' count={post.reactions.heart} postId={post.id} reaction='heart'/>
                  <Reactions reactionType='wow' count={post.reactions.wow} postId={post.id} reaction='wow'/>
                  <Reactions reactionType='coffee' count={post.reactions.coffee} postId={post.id} reaction='coffee'/>
                  <Reactions reactionType='rocket' count={post.reactions.rocket} postId={post.id} reaction='rocket'/>
                  <Reactions reactionType='thumbUp' count={post.reactions.thumbsUp} postId={post.id} reaction='thumbsUp' />
                </div>
                </article>)
        }
    </div>
  )
}

export default PostList