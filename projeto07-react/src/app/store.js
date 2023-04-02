import { configureStore } from "@reduxjs/toolkit";
import postSlice from "../Components/posts/postSlice";
import usersSlice from "../Components/users/usersSlice";


const store = configureStore({
    reducer: {
        posts: postSlice,
        users: usersSlice,
        
    }

})


export default store