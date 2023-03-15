import React from 'react'

import { useDispatch} from 'react-redux'
import {BsHeart,BsHandThumbsUpFill, BsRocket } from 'react-icons/bs'
import {BiCoffee } from 'react-icons/bi'
import {FaRegSurprise} from 'react-icons/fa'

import { reactionsAdd } from '../posts/postsSlice'

import styles from './Reactions.module.css'

function Reactions({reactionType,count, postId}) {
    const dispatch = useDispatch()

    const newReaction = {
        postId,
        reactionType
    }

  return (
    <>
    <button className={styles.btnReaction} onClick={() => dispatch(reactionsAdd(newReaction))}>
        {reactionType === 'heart' && <BsHeart />}
        {reactionType === 'thumbsUp' && <BsHandThumbsUpFill />}
        {reactionType === 'rocket' && <BsRocket />}
        {reactionType === 'wow' && <FaRegSurprise />}
        {reactionType === 'coffee' && <BiCoffee />}

        {count}
    </button>
    </>
  )
}

export default Reactions