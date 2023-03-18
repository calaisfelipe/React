import React from 'react'

import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { deleteFetchPost } from '../features/posts/postsSlice'

import styles from '../features/posts/PostExcerpt.module.css'

function Modal({post, action}) {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  
  function confirm(data){

      dispatch(deleteFetchPost(data))
      navigate('/')

  }

  function notConfirm(){
    action.changeStatus(false)

  }

  return (
    <div className={styles.containerAll} >
    <h2>Tem certeza que deseja deletar o post?</h2>
    <div className={styles.reactionContainer}>
      <button className={styles.btnConfirm} onClick={() => confirm(post)}>Sim</button>
      <button className={styles.btnConfirm} onClick={() => notConfirm()}>Não</button>
    </div>
    </div>
  )
}

export default Modal