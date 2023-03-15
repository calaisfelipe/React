import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { selectAllPosts, gettingPosts , getPostError, getPostStatus} from './postsSlice'
import PostExcerpt from './PostExcerpt'

import styles from './PostList.module.css'


function PostList() {
    const dispatch = useDispatch()
    const postStatus = useSelector(getPostStatus)
    const postError = useSelector(getPostError)
    const posts  = useSelector(selectAllPosts)
    

  useEffect(() => { 

  if (postStatus === 'idle'){
    dispatch(gettingPosts())}
    

  }, [postStatus, dispatch])

let content

if(postStatus === 'loading'){
  content = <p>"Loading..."</p>
}else if(postStatus === 'success'){
  const orderedPosts = posts.slice().sort((a,b) => b.date.localeCompare(a.date))
  content = orderedPosts.map( post => <PostExcerpt key={post.id} post={post} />)

}else if(postStatus === 'failed'){
    content = <p>{postError}</p>
}


  return (
    <div className={styles.containerAll}>
        
        <h2>PostList:</h2>
          {content}

       

    </div>
  )
}

export default PostList