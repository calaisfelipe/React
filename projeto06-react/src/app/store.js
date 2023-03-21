import {configureStore} from '@reduxjs/toolkit'
import profileSlice from '../Profile/profileSlice'

const store = configureStore({
    reducer:{
    profile: profileSlice,
    }
})



export default store