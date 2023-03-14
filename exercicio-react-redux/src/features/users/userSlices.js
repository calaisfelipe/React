import { createSlice } from "@reduxjs/toolkit";

const initialState = [

    {id: '0', name: 'Joãozin pé de meia'},
    {id: '1', name: 'Aninha Joaninha'},
    {id: '2', name: 'Matheus jubileus'}
    
]


const userSlices = createSlice({
    name: 'users',
    initialState,
    reducers:{

    }

})

export const selectAllUsers = (state) => state.users

export default userSlices.reducer
export const {} = userSlices.actions