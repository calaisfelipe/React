import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

const url_users = 'https://jsonplaceholder.typicode.com/users'

const initialState = []

export const usersFetch = createAsyncThunk('users/usersFetch', async () =>{

    try{
        const response = await axios.get(url_users)
        return [...response.data]

    }
    catch(err){
            return err.message
    }
} )


const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) =>{

        builder
        .addCase(usersFetch.fulfilled, (state,action) =>{
            return action.payload
        })
    }

})

export const selectAllUsers = (state) => state.users

export const selectUserById = (state, userId) => state.users.find((user) => user.id === userId)


export default usersSlice.reducer
export const {} = usersSlice.actions
