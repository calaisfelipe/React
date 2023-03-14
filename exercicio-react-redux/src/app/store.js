import {configureStore} from '@reduxjs/toolkit'

import postsSlice from '../features/posts/postsSlice'
import userSlices from '../features/users/userSlices'

const store = configureStore({
    reducer:{
        posts: postsSlice,
        users: userSlices
       
    }
})


export default store