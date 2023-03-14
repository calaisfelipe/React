import React, { useState } from 'react'

import { nanoid } from '@reduxjs/toolkit'
import { addPost } from '../posts/postsSlice'
import { selectAllUsers } from '../users/userSlices'
import { useDispatch, useSelector } from 'react-redux'



import styles from './AddPostForm.module.css'


function AddPostForm() {

    const users = useSelector(selectAllUsers)
    const initialState = { 
    id: '', 
    title: '', 
    content: '', 
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

        if (newPost.title && newPost.content) {
            dispatch(addPost({
                ...newPost,
                date: new Date().toISOString()
            }))
            setNewPost(initialState)
        }

    }

    const validation = newPost.title && newPost.content && newPost.userId

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

                <label htmlFor="content">
                    <p>Post Content:</p>

                    <textarea name="content" id="postContent" cols="30" rows="10" onChange={handlePost} value={newPost.content}> </textarea>

                </label>

                <button className={styles.btn} type='submit' disabled={!validation}>Criar Post</button>
            </form>


        </section>
    )
}

export default AddPostForm