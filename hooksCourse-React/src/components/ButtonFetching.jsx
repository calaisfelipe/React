import React, { useEffect, useState} from 'react'

function ButtonFetching() {
  const url = 'https://jsonplaceholder.typicode.com/posts/'
  
  const [post, setPost] = useState({})
  const [id , setId] = useState(1)
  const [idFromButton, setIdFromButton] = useState(1)
 


    useEffect(() =>{

        fetch(`${url}${idFromButton}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        })
        .then((resp) => resp.json())
        .then((data) => {
            console.warn(data)
            setPost(data)
        })
        .catch((err) => console.log(err))


    }, [idFromButton])


    function handlePost() {

        setIdFromButton(id)

    }

    return (

    <div>
        
        <input type="text" value={id} onChange={ (e) => setId(e.target.value)}/>
        <button type='button' onClick={handlePost} >Get Post</button>
        <p>{post.body}</p>
    
    </div>
  )
}

export default ButtonFetching