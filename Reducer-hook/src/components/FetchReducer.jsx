import React, {useReducer, useEffect , useState} from 'react'

const initialState = {
    loading: true,
    error: '',
    post: {}
}

function reducer(state, action){
    switch(action.type){
        case 'FETCH_SUCCESS':
            return {
                loading: false,
                post: action.payload,
                error: ''
            }
        case 'FETCH_ERROR':
            return {
                loading: false,
                post: {},
                error: 'something went wrong !'
            }

            default:
                return state

    }

}

function FetchReducer() {

    const [id , setId] = useState(1)
    const [ state , dispatch] = useReducer(reducer, initialState)

    useEffect(()=> {

        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method:'GET',
            headers: { 'Content-Type': 'application/json'}

        })
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data)
            dispatch({type: 'FETCH_SUCCESS', payload: data})

        })
        .catch((err) => {
            console.log(err)
            dispatch({type: 'FETCH_ERROR'})

        })


    }, [id])

    function getPostId(e) {
        setId(e.target.value)
    }


  return (
    <div>
        <h2>Fetch Reducer</h2>
        <input type="number" name="inputPost" id="inputPost" onChange={getPostId} value={id}/>

        {state.loading ? 'Loading' : state.post.title}
        {state.error ? state.error : null }
    </div>
  )
}

export default FetchReducer