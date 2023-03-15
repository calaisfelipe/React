import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = 'https://jsonplaceholder.typicode.com/users'

const initialState = []
    
export const fetchUsers = createAsyncThunk('users/fetchUsers', async () =>{
    try{  const response = await axios.get(url)
                return [...response.data]

    }
    catch(err)  {
        return err.message

    }
})

const userSlices = createSlice({
    name: 'users',
    initialState,
    reducers:{

    },
    extraReducers: (builder) =>{
        builder.addCase(fetchUsers.fulfilled, (state,action) =>{
            return action.payload

        })
        
    }

})

export const selectAllUsers = (state) => state.users

export default userSlices.reducer
export const {} = userSlices.actions