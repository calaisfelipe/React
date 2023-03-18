import React, {useState} from 'react'

import {useSelector} from 'react-redux'
import { selectPostById } from '../posts/postsSlice'
import { selectAllUsers } from '../users/userSlices'

import { useParams, Link} from 'react-router-dom'


import TimeAgo from '../date/TimeAgo'
import Reactions from '../reactions/Reactions'

import Modal from '../../components/Modal'
import styles from '../posts/PostExcerpt.module.css'

function SinglePostPage() {
    const [confirmDel, setConfirmDel] = useState(false)
    const users = useSelector(selectAllUsers)
    const {id} = useParams()
    const postId = Number(id)
    const postById = useSelector((state) => selectPostById(state, postId))
    

    function deletePost(){
           
        setConfirmDel(!confirmDel)
         
    }

  return (
    <div>
        <h2>Single Post</h2>
        {!postById && <div><h3>Post Not Found!</h3></div>}
        
        {postById && !confirmDel && <div className={styles.containerAll}>
            <article className={styles.postContainer} >
                <h3>{postById.title}</h3>
                <p>{postById.body.substring(0, 100)}</p>
            
                <small>by {users.map((user) => user.id == postById.userId ? user.name : '')} </small>
                <TimeAgo time={postById.date} />
                <div className={styles.reactionContainer}>
                    <Reactions reactionType='heart' count={postById.reactions.heart} postId={postById.id} />
                    <Reactions reactionType='wow' count={postById.reactions.wow} postId={postById.id}  />
                    <Reactions reactionType='coffee' count={postById.reactions.coffee} postId={postById.id} />
                    <Reactions reactionType='rocket' count={postById.reactions.rocket} postId={postById.id} />
                    <Reactions reactionType='thumbsUp' count={postById.reactions.thumbsUp} postId={postById.id} />
                    <div className={styles.actionsContainer}><Link className={styles.editLink} to={`/post/edit/${postId}`}>Edit Post</Link>
                    <button className={styles.btnDelete} onClick={deletePost}>Delete Post</button>
                    </div>
                    
                

                </div>
            </article>
        </div>}

        {postById && confirmDel && <Modal post={postById} action={{status:confirmDel, changeStatus: setConfirmDel}} />}

        

       
        


    </div>
  )
}

export default SinglePostPage
