import {configureStore} from '@reduxjs/toolkit'

import NameSlicer from '../features/name/NameSlicer'
import counterSlicer from '../features/counter/counterSlicer'


const store = configureStore({
    reducer:{
        Name: NameSlicer,
        Counter: counterSlicer
    }
})


export default store