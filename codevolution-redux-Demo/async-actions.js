const redux = require('redux')
const thunkMiddleware = require('redux-thunk').default
const axios = require('axios')
const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware

const url = 'https://jsonplaceholder.typicode.com/users'

const FETCH_USERS_REQUESTED = 'FETCH_USERS_REQUESTED'
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
const FETCH_USERS_FAILED = 'FETCH_USERS_FAILED'


const initialState = {
    loading: false,
    users: [],
    error: ''
}


function reducer(state = initialState, action){
        switch(action.type){

            case FETCH_USERS_REQUESTED:
                return {...state,
                    loading: true
                }

                case FETCH_USERS_SUCCESS:
                    return {...state,
                        loading:false,
                        users: action.payload,
                        error: ''

                    }

                case FETCH_USERS_FAILED:
                    return {...state,
                        loading: false,
                        users: [],
                        error: action.payload
                    }
                    
                default:
                    return state
        }


}

function fetchUsersRequest(){
    
    return{
        type: FETCH_USERS_REQUESTED,

    }

} 

function fetchUsersSuccess(users){
    
    return{
        type: FETCH_USERS_SUCCESS,
        payload: users

    }

}

function fetchUsersFailed(error){
    
    return{
        type: FETCH_USERS_FAILED,
        payload: error

    }

}

const fetchUsers = () =>{

    return function(dispatch){

        dispatch(fetchUsersRequest())
        axios
        .get(url)
        .then( (response) => {
            const users = response.data.map((user) => user.id)
            dispatch(fetchUsersSuccess(users))
        })
        .catch((error) => {
            dispatch(fetchUsersFailed(error.message))

        })
        

    }

}

const store = createStore(reducer, applyMiddleware(thunkMiddleware) )


store.subscribe(() =>{ console.log(store.getState())} )
store.dispatch((fetchUsers()))