import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
//import   { Octokit }  from 'octokit'
import axios from 'axios'

const url_USERS = 'https://api.github.com/users'

const auth = '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'

/*const octokit = new Octokit({
    auth: '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',
})*/

const initialState = {
    profile: [],
    repository: [],
    loading: false,
    error: ''
}

export const profileFetch = createAsyncThunk('profile/profileFetch', async (prof) => {
    
    try {
        const response = await axios.get(`${url_USERS}/${prof}`,{
            headers:{
                'Authorization': `Bearer ${auth}`
            }
        }
        )
       // const response = await octokit.request(`GET /${prof}`, {})
        return response.data
    }

    catch (err) {
        return err.message
    }
})

export const repositoryFetch = createAsyncThunk('profile/repositoryFetch', async (login) =>{
    try{
            const response = await axios.get(`${url_USERS}/${login}/repos`,{
                headers:{
                    'Authorization': `Bearer ${auth}`
                }
            })
            return response.data
    }

    catch(err){
            return err.message
    }
}) 


const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        restartSearch: (state) => {
            state.profile = []
            state.repository = []
           
        } 

    },
    extraReducers: (builder) => {
        builder
            .addCase(profileFetch.pending, (state) => {
                state.loading = true
            })
            .addCase(profileFetch.fulfilled, (state, action) => {
                state.profile = []
                state.profile.push(action.payload)

            })
            .addCase(profileFetch.rejected, (state, action) => {
                state.error = action.error.message
            })

            .addCase(repositoryFetch.fulfilled, (state, action) =>{
                state.repository = []
                state.repository.push(action.payload)
            })
    }


})


export const allProfiles = (state) => state.profile.profile
export const allRepository = (state) => state.profile.repository



export default profileSlice.reducer
export const { restartSearch } = profileSlice.actions