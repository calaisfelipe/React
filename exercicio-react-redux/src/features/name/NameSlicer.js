import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    name: 'Felipe'
}


const NameSlicer = createSlice({
    name: 'Name',
    initialState,
    reducers: {
        changeName: (state, action) => {
            state.name = action.payload
        },

        clearName: (state) => {
            state.name = ''
        }

    }

})


export default NameSlicer.reducer 
export const {changeName, clearName} = NameSlicer.actions