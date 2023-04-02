import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import {sub} from 'date-fns'
import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com/posts'


export const postsFetch = createAsyncThunk('posts/postsFetch', async () =>{
    try{  const response = await axios.get(url)
            return [...response.data]
    }
    catch(err){
        return err.message
    }
})

export const addPostFetch = createAsyncThunk('posts/addPostFetch', async (initialPost) =>{
    try{  const response = await axios.post(url, initialPost)
            return response.data
    }
    catch(err){
        return err.message
    }
})

export const editPostFetch = createAsyncThunk('posts/editPostFetch', async (editedPost) =>{
    const {id} = editedPost
    
    try{  const response = await axios.put(`${url}/${id}`, editedPost)
            return response.data
    }
    catch(err){
        return editedPost
    }
})


export const deletedPostFetch = createAsyncThunk('posts/deletedPostFetch', async (deletedPost) =>{
    const {id} = deletedPost
    
    try{  const response = await axios.delete(`${url}/${id}`)
             if(response?.status === 200) return deletedPost
            return `${response?.status}: ${response?.statusText}`
    }
    catch(err){
        return err.message
    }
})


const initialState ={
    posts: [],
    loading: false,
    error: '',
    message: ''
    
}


const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        turnOffmessage: (state) =>{
            state.message = ''
        } 


    },
    extraReducers: (builder) => {

        builder
        .addCase(postsFetch.fulfilled , (state, action) => {
            let min = 1
            const newPosts = action.payload.map((post) => {
                post.date = sub(new Date(), {minutes: min++}).toISOString()
                 return post
            
            } )
            
            state.posts = newPosts
            state.loading = false
            state.error = ''
        })
        .addCase(postsFetch.pending, (state) =>{
            state.loading = true
            state.posts = []
            state.error = ''
        })
        .addCase(postsFetch.rejected, (state, action) =>{
            state.loading = false
            state.posts = []
            state.error = action.error.message
        })

        .addCase(addPostFetch.fulfilled, (state,action) => {
            action.payload.userId = Number(action.payload.userId)
            action.payload.date = new Date().toISOString()

            state.posts.push(action.payload)
            state.message = 'Post criado com sucesso!!'
        })

        .addCase(editPostFetch.fulfilled, (state, action) =>{
                const {id} = action.payload
                action.payload.date = new Date().toISOString()

                const newPostsList = state.posts.filter((post) => post.id !== id ) 
                

                state.posts = [...newPostsList, action.payload]
                state.message = 'Post Editado!'

        })

        .addCase(deletedPostFetch.fulfilled, (state,action) =>{
                const {id} = action.payload

                const newPostsList = state.posts.filter((post) => post.id !== id ) 

                state.posts = [...newPostsList]
                state.message = 'Post deletado com sucesso!'

        })
        
    }

})

export const selectMessage = (state) => state.posts.message
export const selectAllPosts = (state) => state.posts.posts

export const selectPostByid = (state, userId) => state.posts.posts.find((post) => post.id == userId)


export default postSlice.reducer
export const { turnOffmessage } = postSlice.actions 