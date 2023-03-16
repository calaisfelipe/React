import React, {useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { selectPostById, editPost } from './postsSlice'
import { selectAllUsers } from '../users/userSlices'

import styles from '../addPosts/AddPostForm.module.css'


function EditPostForm() {
const navigate = useNavigate()
const dispatch = useDispatch()
const {id} = useParams()
const postId = Number(id)

const users = useSelector(selectAllUsers)
const post = useSelector((state) => selectPostById(state, postId))
const [editedInfo, setEditedInfo] = useState(post)


function handlePost(e){

    setEditedInfo({...editedInfo,
        [e.target.name] : e.target.value

    })


}

function sendPost(e) {

   e.preventDefault()

    dispatch(editPost(editedInfo))

    navigate('/')



}

    const validation = editedInfo.title && editedInfo.body && editedInfo.userId

    return (
    <section className={styles.createPostContainer}>

            <h2>Edit Post</h2>

            <form onSubmit={sendPost} className={styles.formContainer}>
                <label htmlFor="title">
                    <p>Post Title:</p>
                    <input type="text" name="title" id="postTitle" onChange={handlePost} placeholder='Titulo do post..' value={editedInfo.title} />

                </label>

                <label htmlFor="userSelector">
                    <p>Author:</p>
                    <select name="userId" id="userSelector" value={editedInfo.userId} onChange={handlePost}>
                        <option value="">Selecione um autor</option>
                        {users.map((user) => <option key={user.id} value={user.id}>{user.name}</option>)}
                    </select>

                </label>

                <label htmlFor="body">
                    <p>Post body:</p>

                    <textarea name="body" id="postbody" cols="30" rows="10" onChange={handlePost} value={editedInfo.body}> </textarea>

                </label>

                <button className={styles.btn} disabled={!validation} type='submit'>Editar Post</button>
            </form>


        </section>
  )
}

export default EditPostForm