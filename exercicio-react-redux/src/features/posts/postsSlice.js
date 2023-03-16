import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { sub } from 'date-fns'

import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com/posts'



const initialState = {
    posts: [],
    status: 'idle', //idle | loading | success | failed | 
    error: null
}


export const gettingPosts = createAsyncThunk('posts/gettingPosts', async () => {
    try {
        const response = await axios.get(url)
        return [...response.data]
    }

    catch (err) {
        return err.message
    }
}

)

export const addNewPost = createAsyncThunk('posts/addNewPost', async (initialPost) => {

    try {
        const response = await axios.post(url, initialPost)
        return response.data
    }

    catch (err) {
        return err.message

    }
})

/*
export const editPost = createAsyncThunk('posts/editPost', async (editedPost) =>{
    try{
        const response = await axios.patch(url, editedPost)
        return response.data
    }
    catch (err){
        return err.message
    }
})*/




const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        addPost: (state, action) => {
            state.posts.push(action.payload)
        },
        editPost: (state,action) => {
            const {postId} = action.payload
            const lastPost = state.posts.filter((post) => post.id !== postId)
            
            if(lastPost){
                state.posts = lastPost
                state.posts.push(action.payload)
            }


        },
        reactionsAdd: (state, action) => {
            const { postId, reactionType } = action.payload
            const existingPost = state.posts.find(post => post.id === postId)
            if (existingPost) {
                existingPost.reactions[reactionType]++
            }
        }

    },
    extraReducers: (builder) => {
        builder.addCase(gettingPosts.pending, (state) => { state.status = 'loading' })


        builder.addCase(gettingPosts.fulfilled, (state, action) => {
            state.status = 'success'

            // add date and reactions
            let min = 1
            const loadedPosts = action.payload.map((post) => {

                post.date = sub(new Date(), { minutes: min++ }).toISOString(),

                    post.reactions = {
                        thumbsUp: 0,
                        wow: 0,
                        heart: 0,
                        rocket: 0,
                        coffee: 0
                    }
                return post
            })

            // add any fetched posts to the array
            state.posts = loadedPosts
        })

        builder.addCase(gettingPosts.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        })

        builder.addCase(addNewPost.fulfilled, (state, action) => {
            action.payload.userId = Number(action.payload.userId)
            action.payload.date = new Date().toISOString()
            action.payload.reactions = {
                thumbsUp: 0,
                wow: 0,
                heart: 0,
                rocket: 0,
                coffee: 0
            }

            state.posts.push(action.payload)

        })

    }
})

export const selectAllPosts = (state) => state.posts.posts
export const getPostStatus = (state) => state.posts.status
export const getPostError = (state) => state.posts.error

export const selectPostById = (state, postId) => state.posts.posts.find((post) => post.id === postId)


export default postsSlice.reducer
export const { addPost, reactionsAdd, editPost } = postsSlice.actions