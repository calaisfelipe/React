import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { sub } from 'date-fns'

import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com/posts'



const initialState = {
    posts: [],
    status: 'idle', //idle | loading | success | failed | 
    error: null,
    count: 0
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

export const editPost = createAsyncThunk('posts/editPost', async (editedPost) =>{
    const {id} = editedPost

    try{
        const response = await axios.put(`${url}/${id}`, editedPost)
        return response.data
    }
    catch (err){
        return editedPost  //only for testing redux!
    }
})

export const deleteFetchPost = createAsyncThunk('posts/deleteFetchPost', async (initialPost) =>{
    const {id} = initialPost
  
  try{const response = await axios.delete(`${url}/${id}`)
        if(response?.status === 200) return initialPost
        return `${response?.status}: ${response?.statusText}`
  
  }  
    catch(err){
        return err.message
    }

})



const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        increaseCount: (state) =>{
            state.count += 1
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

        builder.addCase(editPost.fulfilled, (state,action) =>{
            if(!action.payload?.id){
                console.log('update could not complete')
                console.log(action.payload)
                return
            }

            const {id} = action.payload
            action.payload.date = new Date().toISOString()

            const lastPost = state.posts.filter((post) => post.id !== id)
            
            state.posts = [...lastPost, action.payload]

        })

        builder.addCase(deleteFetchPost.fulfilled, (state,action) =>{

            if(!action.payload?.id){
                console.log('Delete could not complete')
                console.log(action.payload)
                return
            }

            const {id} = action.payload

            const posts = state.posts.filter((post) => post.id !== id)

            state.posts = [...posts]


        })


    }
})

export const selectAllPosts = (state) => state.posts.posts
export const getPostStatus = (state) => state.posts.status
export const getPostError = (state) => state.posts.error
export const getCount = (state) => state.posts.count

export const selectPostById = (state, postId) => state.posts.posts.find((post) => post.id === postId)


export default postsSlice.reducer
export const { increaseCount, reactionsAdd } = postsSlice.actions