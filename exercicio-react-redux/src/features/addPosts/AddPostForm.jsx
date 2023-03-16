import React, { useState, useEffect } from 'react'

import { nanoid } from '@reduxjs/toolkit'
import { addNewPost} from '../posts/postsSlice'
import { selectAllUsers } from '../users/userSlices'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


import styles from './AddPostForm.module.css'


function AddPostForm() {
    const users = useSelector(selectAllUsers)
    const navigate = useNavigate()

    const initialState = { 
    id: '', 
    title: '', 
    body: '', 
    userId: '', 
    date: '' , 
    reactions: {
        thumbsUp: 0 ,
        wow: 0,
        heart: 0,
        rocket: 0,
        coffee: 0
    } }


    const [newPost, setNewPost] = useState(initialState)


    const dispatch = useDispatch()

    function handlePost(e) {

        setNewPost({
            ...newPost, id: nanoid(),
            [e.target.name]: e.target.value


        })
    }

    function createPost(e) {

        e.preventDefault()

        if (newPost.title && newPost.body) {

            /*dispatch(addPost({
                ...newPost,
                date: new Date().toISOString()
            }))*/

            dispatch(addNewPost(newPost))   


            setNewPost(initialState)
            navigate('/')
        }

    }

    const validation = newPost.title && newPost.body && newPost.userId

    return (
        <section className={styles.createPostContainer}>

            <h2>Add a new Post</h2>

            <form onSubmit={createPost} className={styles.formContainer}>
                <label htmlFor="title">
                    <p>Post Title:</p>
                    <input type="text" name="title" id="postTitle" onChange={handlePost} placeholder='Titulo do post..' value={newPost.title} />

                </label>

                <label htmlFor="userSelector">
                    <p>Author:</p>
                    <select name="userId" id="userSelector" value={newPost.userId} onChange={handlePost}>
                        <option value="">Selecione um autor</option>
                        {users.map((user) => <option key={user.id} value={user.id}>{user.name}</option>)}
                    </select>

                </label>

                <label htmlFor="body">
                    <p>Post body:</p>

                    <textarea name="body" id="postbody" cols="30" rows="10" onChange={handlePost} value={newPost.body}> </textarea>

                </label>

                <button className={styles.btn} type='submit' disabled={!validation}>Criar Post</button>
            </form>


        </section>
    )
}

export default AddPostForm