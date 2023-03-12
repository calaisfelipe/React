import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    counter: 0
}

const counterSlicer = createSlice({
    name: 'counter',
    initialState,
    reducers:{
        increase: (state, action) =>{
            state.counter += action.payload
        },
        decrease: (state, action) => {
            state.counter -= action.payload
        },
        reset: (state) =>{
            state.counter = initialState.counter
        }
    }

})

export default counterSlicer.reducer
export const {increase, decrease, reset } = counterSlicer.actions