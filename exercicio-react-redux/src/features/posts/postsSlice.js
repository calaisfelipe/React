import { useEffect } from 'react'
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com/posts'
const dispatch = useDispatch()

const initialState = {
    posts: [],
    status: 'idle', //idle | loading | success | failed | 
    error: null
}


export const gettingPosts = createAsyncThunk('posts/fetchPosts' , () =>{
    return axios.get(url).then((response) => response.data)
}

)


const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers:{  
        addPost: (state,action) =>{
            state.posts.push(action.payload)
        },
        reactionsAdd: (state, action) => {
            const {postId, reaction} = action.payload
            const existingPost = state.posts.find(post => post.id === postId)
            if(existingPost){
                existingPost.reactions[reaction]++
            }
        }
        
    },
    extraReducers: (builder) => {
        builder.addCase(gettingPosts.pending, (state) => {state.posts.status = 'loading'})

    }
})

export const selectAllPosts = (state) => state.posts.posts

export default postsSlice.reducer
export const { addPost, reactionsAdd } = postsSlice.actions